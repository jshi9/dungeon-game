import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Hardened KaTeX Mathematical & Scientific LaTeX Expression Renderer
 * Includes sanitization, strict: false, errorColor: '#8b0000', throwOnError: false,
 * and an Error Boundary fallback that safely renders monospace dark-red scripts on parse error.
 */
export class MathRenderer {
  private static readonly KATEX_OPTIONS: katex.KatexOptions = {
    throwOnError: false,
    errorColor: '#8b0000',
    strict: false,
    output: 'htmlAndMathml',
    trust: true
  };

  /**
   * Process both display equation blocks ($$...$$) and inline equations ($...$)
   */
  public static renderInlineAndBlocks(text: string): string {
    if (!text) return '';

    // 1. Process Display Math: $$ ... $$
    let result = text.replace(/\$\$([\s\S]+?)\$\$/g, (_match, eq) => {
      return this.renderDisplayEquation(eq.trim());
    });

    // 2. Process Inline Math: $ ... $
    result = result.replace(/\$([^\$\n]+?)\$/g, (_match, eq) => {
      return this.renderInlineEquation(eq.trim());
    });

    return result;
  }

  /**
   * Render a display equation with KaTeX and error boundary
   */
  public static renderDisplayEquation(rawLatex: string): string {
    if (!rawLatex) return '';
    try {
      const cleaned = this.sanitizeLatex(rawLatex);
      const renderedHtml = katex.renderToString(cleaned, {
        ...this.KATEX_OPTIONS,
        displayMode: true
      });
      return `<div class="katex-display-container">${renderedHtml}</div>`;
    } catch (err) {
      console.warn('[MathRenderer] Display equation error fallback:', err);
      return `<div class="katex-display-container"><code class="katex-safe-fallback" style="font-family: monospace; color: #8b0000; background: rgba(139,0,0,0.06); padding: 4px 8px; border-radius: 4px; border: 1px solid rgba(139,0,0,0.25); display: inline-block;">${this.escapeHtml(rawLatex)}</code></div>`;
    }
  }

  /**
   * Render an inline equation with KaTeX and error boundary
   */
  public static renderInlineEquation(rawLatex: string): string {
    if (!rawLatex) return '';
    try {
      const cleaned = this.sanitizeLatex(rawLatex);
      const renderedHtml = katex.renderToString(cleaned, {
        ...this.KATEX_OPTIONS,
        displayMode: false
      });
      return `<span class="katex-inline-container">${renderedHtml}</span>`;
    } catch (err) {
      console.warn('[MathRenderer] Inline equation error fallback:', err);
      return `<span class="katex-inline-container"><code class="katex-safe-fallback" style="font-family: monospace; color: #8b0000; background: rgba(139,0,0,0.06); padding: 1px 4px; border-radius: 3px; border: 1px solid rgba(139,0,0,0.2); font-size: 0.9em;">${this.escapeHtml(rawLatex)}</code></span>`;
    }
  }

  /**
   * General equation rendering helper
   */
  public static renderEquation(rawLatex: string, isDisplay: boolean = true): string {
    if (isDisplay) {
      return this.renderDisplayEquation(rawLatex);
    }
    return this.renderInlineEquation(rawLatex);
  }

  /**
   * Sanitizes and normalizes LaTeX strings for KaTeX
   */
  private static sanitizeLatex(latex: string): string {
    let eq = latex.trim();
    // Normalize newlines within equations
    eq = eq.replace(/\r?\n/g, ' ');
    // Handle double-escaped or malformed commands
    eq = eq.replace(/\\\\([a-zA-Z]+)/g, '\\$1');
    return eq;
  }

  private static escapeHtml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * High-Performance KaTeX Mathematical & Scientific LaTeX Expression Renderer
 */
export class MathRenderer {
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
   * Render a display equation with KaTeX
   */
  public static renderDisplayEquation(rawLatex: string): string {
    try {
      const cleaned = this.sanitizeLatex(rawLatex);
      const renderedHtml = katex.renderToString(cleaned, {
        displayMode: true,
        throwOnError: false,
        output: 'htmlAndMathml',
        trust: true
      });
      return `<div class="katex-display-container">${renderedHtml}</div>`;
    } catch {
      return `<div class="katex-display-container"><span class="math-fallback">${rawLatex}</span></div>`;
    }
  }

  /**
   * Render an inline equation with KaTeX
   */
  public static renderInlineEquation(rawLatex: string): string {
    try {
      const cleaned = this.sanitizeLatex(rawLatex);
      const renderedHtml = katex.renderToString(cleaned, {
        displayMode: false,
        throwOnError: false,
        output: 'htmlAndMathml',
        trust: true
      });
      return `<span class="katex-inline-container">${renderedHtml}</span>`;
    } catch {
      return `<span class="katex-inline-container math-fallback">${rawLatex}</span>`;
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
}

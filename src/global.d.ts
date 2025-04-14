declare namespace JSX {
    interface IntrinsicElements {
      'formester-standard-form': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        'set-auto-height'?: string;
        height?: string;
        id?: string;
        url?: string;
      };
    }
  }
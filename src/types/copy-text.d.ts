declare module 'vue-clipboard2' {
  interface Result {
    text: string;
    action: 'cut' | 'copy';
    container: Element | undefined;
  }

  interface VueClipboardConfig {
    autoSetContainer: boolean;
    // This fixes IE, see #50
    appendToBody: boolean;
  }

  const config: VueClipboardConfig;
}

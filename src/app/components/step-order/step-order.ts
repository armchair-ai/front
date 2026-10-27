import { Component, input } from '@angular/core';

@Component({
  selector: 'app-step-order',
  standalone: true,
  templateUrl: './step-order.html',
  styleUrl: './step-order.scss',
})
export class StepOrder {
  /**
   * Color de fondo o degradado uniforme que cubre la figura completa.
   * Ejemplos:
   * - Sólido: '#1a00ff'
   * - Degradado: 'linear-gradient(90deg, #1a00ff, #ec4899)'
   */
  readonly background = input<string>('#1a00ff');

  /**
   * Dirección hacia donde apunta la terminación triangular ('right' | 'left')
   */
  readonly direction = input<'right' | 'left'>('right');

  readonly width = input<string>('320px');
  readonly height = input<string>('160px');

  /**
   * Color de la sombra/borde sólido por debajo (ej. '#ffffff')
   */
  readonly shadowColor = input<string>('#ffffff');

  /**
   * Grosor de la sombra inferior sólida (ej. '1px')
   */
  readonly shadowOffset = input<string>('1px');
}

export type PriceListItem = {
  size: string;
  retail: number;
  from30: number;
  from100: number;
  from1000: number;
};

export const priceList: Record<string, PriceListItem[]> = {
  hinged: [
    { size: '5x5x2', retail: 6, from30: 4.2, from100: 3.9, from1000: 3.6 },
    { size: '5x5x3', retail: 7.5, from30: 5.2, from100: 4.9, from1000: 4.7 },
    { size: '6.5x6.5x6.5', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '7x4x2.8', retail: 7.5, from30: 5.6, from100: 5.2, from1000: 4.8 },
    { size: '8x4x2', retail: 7.5, from30: 5.6, from100: 5.2, from1000: 4.8 },
    { size: '8x5x3.5', retail: 10, from30: 6.93, from100: 6.5, from1000: 5.95 },
    { size: '8x6x2', retail: 10, from30: 6.93, from100: 6.5, from1000: 5.95 },
    { size: '8x6x3', retail: 10, from30: 6.93, from100: 6.5, from1000: 5.95 },
    { size: '8x8x3', retail: 12.9, from30: 9.24, from100: 8.7, from1000: 7.9 },
    { size: '8x8x8', retail: 26, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '9x3.5x3.5', retail: 10, from30: 6.93, from100: 6.5, from1000: 5.95 },
    { size: '10x4x2', retail: 7.5, from30: 5.6, from100: 5.2, from1000: 4.8 },
    { size: '10x5x2.8', retail: 10, from30: 6.93, from100: 6.5, from1000: 5.95 },
    { size: '10x8x3', retail: 12.9, from30: 9.24, from100: 8.7, from1000: 7.9 },
    { size: '10x10x6', retail: 26, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '10x10x10', retail: 27, from30: 21.8, from100: 19.1, from1000: 18.1 },
    { size: '11x3.5x3.5', retail: 12.9, from30: 9.24, from100: 8.7, from1000: 7.9 },
    { size: '12x2x2', retail: 6.6, from30: 4.7, from100: 4.35, from1000: 4 },
    { size: '12x8x3', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '12x9x7', retail: 26, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '12x12x4', retail: 26, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '12.5x4.5x4.5', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '14x5x2.8', retail: 15, from30: 10.8, from100: 10, from1000: 9.2 },
    { size: '14x8x4', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '14.5x4x3.5', retail: 15, from30: 10.8, from100: 10, from1000: 9.2 },
    { size: '14.6x11.6x3.5', retail: 26, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '14.8x4.8x3.5', retail: 15, from30: 10.8, from100: 10, from1000: 9.2 },
    { size: '14.8x5.5x2.5', retail: 15, from30: 10.8, from100: 10, from1000: 9.2 },
    { size: '14.8x5.5x4', retail: 15, from30: 10.8, from100: 10, from1000: 9.2 },
    { size: '15x7x7', retail: 30, from30: 23.2, from100: 22.15, from1000: 21.1 },
    { size: '15x10x2', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '15x10x3', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '15x15x4.5', retail: 26, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '15x15x6', retail: 38, from30: 27.2, from100: 25.53, from1000: 22.2 },
    { size: '15x15x10', retail: 55.1, from30: 44.41, from100: 40.2, from1000: 36.5 },
    { size: '16x15x7', retail: 46, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '16x16x10', retail: 55.1, from30: 44.41, from100: 40.2, from1000: 36.5 },
    { size: '16.5x11.5x6', retail: 34.7, from30: 24.2, from100: 23.15, from1000: 22.1 },

    { size: '17x4.2x4.2', retail: 19, from30: 11.9, from100: 11.2, from1000: 10.2 },
    { size: '17x4.5x4.5', retail: 19, from30: 11.9, from100: 11.2, from1000: 10.2 },
    { size: '17x8x4', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '17x6.5x5.5', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '17x14x5', retail: 38, from30: 25.9, from100: 24.31, from1000: 21.14 },
    { size: '17x12x4', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '17x15x4', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '17.5x8x8', retail: 36, from30: 27.2, from100: 25.5, from1000: 22.1 },

    { size: '18x10x2', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '18x13x5', retail: 40, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '18x18x2.5', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '18x18x6', retail: 40, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '18x18x11', retail: 59.45, from30: 54.23, from100: 45.54, from1000: 42.1 },

    { size: '19.5x7x4', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },

    { size: '20x15x5', retail: 38, from30: 25.9, from100: 24.31, from1000: 21.14 },
    { size: '20x17x3', retail: 26, from30: 18.72, from100: 17.85, from1000: 16.8 },
    { size: '20x20x10', retail: 59.45, from30: 54.23, from100: 45.54, from1000: 41.82 },

    { size: '21x7x6.5', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '21x11x3', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '21x11x5.5', retail: 27, from30: 21.8, from100: 19.1, from1000: 18.1 },
    { size: '21x14x3', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '21x15x10', retail: 57, from30: 46.2, from100: 41.1, from1000: 35.9 },
    { size: '21x16x3', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '21.5x12.8x9', retail: 57, from30: 45.41, from100: 37.84, from1000: 35 },

    { size: '22x4.5x4.5', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },
    { size: '22x16x5', retail: 46, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '22x19x6', retail: 46, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '22x22x6', retail: 46, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '22.5x14.6x7.2', retail: 46, from30: 41.9, from100: 34.91, from1000: 32.17 },

    { size: '23x17x9', retail: 59, from30: 46.87, from100: 39.06, from1000: 37.14 },

    { size: '24x8x8', retail: 46, from30: 36.62, from100: 31.2, from1000: 28.8 },

    { size: '25x15x5', retail: 46, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '25x15x10 эмит кр', retail: 59, from30: 46.87, from100: 39.06, from1000: 37.14 },
    { size: '25x17x10', retail: 60, from30: 52.32, from100: 47.96, from1000: 37.14 },
    { size: '25x25x10', retail: 66, from30: 59.92, from100: 55, from1000: 48.83 },
    { size: '25x25x5', retail: 46, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '25x5.5x5.5', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },

    { size: '26x20x9 сундучок с ручками', retail: 80, from30: 67.2, from100: 58, from1000: 48.83 },
    { size: '26x21x6', retail: 43, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '26x7x2', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },

    { size: '27x20x10', retail: 65, from30: 57.86, from100: 48.22, from1000: 44.6 },

    { size: '28x4x3', retail: 19.3, from30: 13.9, from100: 13, from1000: 12.1 },
    { size: '28x8x4', retail: 23, from30: 16.2, from100: 15.1, from1000: 14.6 },

    { size: '29x29x7', retail: 75, from30: 69, from100: 58, from1000: 54.4 },

    { size: '30x17x6 с соус. (3шт d-4,8)', retail: 61.3, from30: 52.6, from100: 48.7, from1000: 44.2 },
    { size: '30x17x6', retail: 57, from30: 45.41, from100: 37.84, from1000: 35 },
    { size: '30x22x6', retail: 57, from30: 45.41, from100: 37.84, from1000: 35 },
    { size: '30x30x9', retail: 80, from30: 70.4, from100: 58, from1000: 54.4 },

    { size: '32x14x4', retail: 43, from30: 36.62, from100: 31.2, from1000: 28.8 },

    { size: '33x5.5x5.5', retail: 35, from30: 26.56, from100: 22.16, from1000: 20.42 },
    { size: '33x11x5.5', retail: 45, from30: 36.8, from100: 31.2, from1000: 28.8 },

    { size: '34x4.5x4.5', retail: 26, from30: 18.72, from100: 17.85, from1000: 16.8 },
    { size: '34x30x8', retail: 80, from30: 70.4, from100: 58, from1000: 54.4 },

    { size: '35x8.5x5.5', retail: 38, from30: 26.56, from100: 24.31, from1000: 21.14 },
    { size: '35x30x3', retail: 60, from30: 51.26, from100: 42.72, from1000: 39.51 },

    { size: '36.5x12x7', retail: 40, from30: 36.62, from100: 31.2, from1000: 28.8 },

    { size: '37x24x3', retail: 57, from30: 45.41, from100: 37.84, from1000: 35 },

    { size: '50x40x2.2', retail: 80, from30: 70.4, from100: 58, from1000: 54.4 },

    { size: '60x7x3.5', retail: 40, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '60x7x4', retail: 40, from30: 36.62, from100: 31.2, from1000: 28.8 },
    { size: '69x14x4', retail: 59.45, from30: 54.23, from100: 45.54, from1000: 41.82 },
  ],

  separate: [
    { size: '14x10x5', retail: 22.75, from30: 22.1, from100: 21.45, from1000: 19.5 },
    { size: '14x14x14', retail: 36.5, from30: 32.85, from100: 31.2, from1000: 28.8 },
    { size: '16x11x3', retail: 22.75, from30: 22.1, from100: 21.45, from1000: 19.5 },
    { size: '20x20x9', retail: 38.5, from30: 34.08, from100: 31.2, from1000: 28.8 },
    { size: '25x14x10', retail: 38.5, from30: 34.08, from100: 31.2, from1000: 28.8 },
    { size: '25x25x10', retail: 65, from30: 63.7, from100: 59.8, from1000: 52 },
    { size: '30x14x10', retail: 40, from30: 35.62, from100: 32.5, from1000: 29.3 },
    { size: '30x40x10', retail: 70.2, from30: 68.9, from100: 65, from1000: 56.6 },
    { size: '35x16x12', retail: 65, from30: 63.7, from100: 59.8, from1000: 52 },
    { size: '35x35x11', retail: 70.2, from30: 68.9, from100: 65, from1000: 57.2 },
  ],

  window: [
    { size: '16x16x4 с откидной', retail: 35.5, from30: 33.85, from100: 32.26, from1000: 29.1 },
    { size: '18x15x5 с отдельной', retail: 48.87, from30: 47.04, from100: 44.29, from1000: 39.7 },
    { size: '20x20x9 с отдельной', retail: 57.05, from30: 54.89, from100: 51.65, from1000: 46.24 },
    { size: '22x22x6 с откидной', retail: 57.05, from30: 54.89, from100: 51.65, from1000: 46.24 },
    { size: '30x30x12 с отдельной', retail: 109.95, from30: 105.67, from100: 99.25, from1000: 88.56 },
  ],
};

export const hingedBoxes: PriceListItem[] = priceList.hinged;
export const separateCoverBoxes: PriceListItem[] = priceList.separate;
export const windowBoxes: PriceListItem[] = priceList.window;

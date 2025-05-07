export const speedColors = [
    { range: [0, 5], label: '[0,5]', color: '#807FBB', transparent: 'rgba(128,127,187,0.4)' },
    { range: [5, 20], label: '[5,20]', color: '#A87CCA', transparent: 'rgba(168,124,202,0.4)' },
    { range: [20, 40], label: '[20,40]', color: '#C787C6', transparent: 'rgba(199,135,198,0.4)' },
    { range: [40, 60], label: '[40,60]', color: '#DF9FB4', transparent: 'rgba(223,159,180,0.4)' },
    { range: [60, 100], label: '[60,100]', color: '#F0B8A1', transparent: 'rgba(240,184,161,0.4)' },
    { range: [100, 300], label: '[100,300]', color: '#F8D58F', transparent: 'rgba(248,213,143,0.4)' },
    { range: [300, Infinity], label: '[300〜]', color: '#CCCCCC', transparent: 'rgba(204,204,204,0.4)' },
  ];
  
  export function getSpeedColor(speed: number, transparent = false): string {
    const found = speedColors.find(({ range }) => speed >= range[0] && speed <= range[1]);
    return transparent ? found?.transparent ?? '#CCCCCC' : found?.color ?? '#CCCCCC';
  }
  
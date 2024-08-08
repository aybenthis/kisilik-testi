function myCharacter(cevaplar) {
  let toplamPuan = 0;

  for (let i = 0; i < cevaplar.length; i++) {
    if (i === 0) {
      switch (cevaplar[i]) {
        case 'a':
          toplamPuan += 20;
          break;
        case 'b':
          toplamPuan += 10;
          break;
        case 'c':
          toplamPuan += 5;
          break;
        default:
          break;
      }
    } else if (i === 1) {
      switch (cevaplar[i]) {
        case 'a':
          toplamPuan += 10;
          break;
        case 'b':
          toplamPuan += 20;
          break;
        case 'c':
          toplamPuan += 5;
          break;
        default:
          break;
      }
    } else if (i === 2) {
      switch (cevaplar[i]) {
        case 'a':
          toplamPuan += 5;
          break;
        case 'b':
          toplamPuan += 20;
          break;
        case 'c':
          toplamPuan += 10;
          break;
        default:
          break;
      }
    } else if (i === 3) {
      switch (cevaplar[i]) {
        case 'a':
          toplamPuan += 5;
          break;
        case 'b':
          toplamPuan += 10;
          break;
        case 'c':
          toplamPuan += 20;
          break;
        default:
          break;
      }
    } else if (i === 4) {
      switch (cevaplar[i]) {
        case 'a':
          toplamPuan += 10;
          break;
        case 'b':
          toplamPuan += 20;
          break;
        case 'c':
          toplamPuan += 5;
          break;
        default:
          break;
      }
    }
  }
  if (toplamPuan >= 80 && toplamPuan <= 100) {
    return 'Cesur';
  } else if (toplamPuan >= 50 && toplamPuan <= 79) {
    return 'Düşünceli';
  } else {
    return 'Sevimli';
  }
}

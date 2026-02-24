let averageGrade;

averageGrade = 77;

switch (true) {
  case averageGrade < 0:
  case averageGrade > 100: {
    console.log('Некорректна оцінка');
    break;
  }
  case averageGrade >= 91: {
    console.log('Відмінно');
    break;
  }
  case averageGrade >= 81: {
    console.log('Дуже добре');
    break;
  }
  case averageGrade >= 71: {
    console.log('Добре');
    break;
  }
  case averageGrade >= 61: {
    console.log('Задовільно');
    break;
  }
  case averageGrade <= 60: {
    console.log('Незадовільно');
    break;
  }
  default:
    console.log('Некорректні дані');
}

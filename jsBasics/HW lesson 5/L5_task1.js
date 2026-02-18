let averageGrade;
averageGrade = 99;

try {
  if (averageGrade > 100 || averageGrade < 0) {
    throw new Error(`Некоректна оцінка ${averageGrade}`);
  }

  if (averageGrade >= 91 && averageGrade <= 100) {
    console.log('Відмінно');
  } else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log('Дуже добре');
  } else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log('Добре');
  } else if (averageGrade >= 61 && averageGrade <= 70) {
    console.log('Задовільно');
  } else if (averageGrade <= 60 && averageGrade >= 0) {
    console.log('Незадовільно');
  }
} catch (error) {
  console.log('Помилка:', error.message);
}

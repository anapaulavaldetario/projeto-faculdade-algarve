const buttonFirstSemester = document.querySelector('#first-semester')
const buttonSecondSemester = document.querySelector('#second-semester')
const tableFirstSemester = document.querySelector('.first-semester table')
const tableSecondSemester = document.querySelector('.second-semester table')


function openTableOne(){
  if(tableFirstSemester.style.display === 'none') {
    tableFirstSemester.style.display = 'table'
  }
  else{
    tableFirstSemester.style.display = 'none'
  }}

function openTableTwo(){
if(tableSecondSemester.style.display === 'none') {
  tableSecondSemester.style.display = 'table'
  }
  else {
    tableSecondSemester.style.display = 'none'
  }
}


buttonFirstSemester.addEventListener('click',openTableOne)
buttonSecondSemester.addEventListener('click',openTableTwo)




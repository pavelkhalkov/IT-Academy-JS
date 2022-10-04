const fs = require('fs-extra');

//1. Создать первую папку
const dir = './testFolder1'
fs.ensureDirSync( dir, './testFolder1');

//2. Создать текстовый файл в созданной папке
const file = './testFolder1/file.txt'
fs.ensureFileSync(file)

//3. Создать вторую папку
const dire = './testFolder2'
fs.ensureDirSync( dire, './testFolder2');

//4. Переместить файл из первой во вторую папку
fs.moveSync('./testFolder1/file.txt', './testFolder2/file.txt')

//5. Создать третью папку
const direс = './testFolder3'
fs.ensureDirSync( direс, './testFolder3');

//6.Cкопировать файл из второй в третью папку
const direсt = './testFolder3'
fs.copySync('./testFolder2/file.txt', './testFolder3/file.txt')

//7. Удалить файлы
fs.removeSync('./testFolder2/file.txt')
fs.removeSync('./testFolder3/file.txt')

//8. Удалить все папки
fs.removeSync('./testFolder1')
fs.removeSync('./testFolder2')
fs.removeSync('./testFolder3')
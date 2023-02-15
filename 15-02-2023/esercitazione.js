const MongoClient = require('mongodb').MongoClient
let url =
  'mongodb+srv://chibiusagitsukino:b2a1k2a1@cluster0.ks2lpsu.mongodb.net/school?retryWrites=true'
const client = new MongoClient(url)

//Mi connetto al mio database
MongoClient.connect(url)
  .then((db) => {
    accountDb = db
    collection = accountDb.db('school')
    console.log('database connesso')
  })
  .catch((error) => {
    console.log(error)
  })

//Creo una nuova collezione
MongoClient.connect(url, (error, db) => {
  if (error) throw error
  let dbase = db.db('school')
  dbase.createCollection('students', (error, res) => {
    if (error) throw error
    console.log('Collezione creata')
    db.close()
  })
})

//Inserisco studenti
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  let dbase = db.db('school')

  let myStudents = [
    {
      name: 'Mario',
      surname: 'Rossi',
      student_id: 12345,
      courses: ['Math', 'History'],
      exams: ['Math Exam', 'History Exam'],
    },
    {
      name: 'Paolo',
      surname: 'Bianchi',
      student_id: 54321,
      courses: ['Science'],
      exams: ['Science Exam'],
    },
    {
      name: 'Laura',
      surname: 'Verdi',
      student_id: 98765,
      courses: ['History', 'Art'],
      exams: ['History Exam', 'Art Exam'],
    },
  ]

  dbase.collection('students').insertMany(myStudents, (err, res) => {
    if (err) throw err
    console.log(`Numero di record inseriti: ${res.insertedCount}`)
    db.close()
  })
})

//Inserisco corsi
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  let dbase = db.db('courses')

  let myCourses = [
    {
      name: 'Math',
      subject: 'Mathematics',
      teachers: ['Prof. Smith', 'Prof. Johnson'],
    },
    {
      name: 'History',
      subject: 'Social Sciences',
      teachers: ['Prof. Brown', 'Prof. Davis'],
    },
    {
      name: 'Science',
      subject: 'Natural Sciences',
      teachers: ['Prof. Lee', 'Prof. Thompson'],
    },
    {
      name: 'English',
      subject: 'Languages',
      teachers: ['Prof. Wilson', 'Prof. Garcia'],
    },
    { name: 'Art', subject: 'Art', teachers: ['Jane Smith', 'John Doe'] },
  ]

  dbase.collection('courses').insertMany(myCourses, (err, res) => {
    if (err) throw err
    console.log(`Numero di record inseriti: ${res.insertedCount}`)
    db.close()
  })
})

//Leggo tutti i dati
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  let dbase = db.db('school')
  dbase
    .collection('students')
    .find({})
    .toArray(function (err, res) {
      if (err) throw err
      console.log(res)
      db.close()
    })
})

//Leggo un dato usando un filtro
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  let dbase = db.db('school')
  let query = { courses: 'History' }
  dbase
    .collection('students')
    .find(query)
    .toArray(function (err, res) {
      if (err) throw err
      console.log(res)
      db.close()
    })
})

//Elimino un dato
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  let dbase = db.db('school')

  let query = { courses: 'History' }
  dbase.collection('students').deleteMany(query, function (err, obj) {
    if (err) throw err
    console.log(`${obj.result} records cancellati`)
    db.close()
  })
})

//Aggiorno un dato
MongoClient.connect(url, (err, db) => {
  if (err) throw err
  let dbase = db.db('school')

  let query = { name: 'Mario' }
  let newValue = { $set: { courses: ['Math', 'Science'] } }
  dbase.collection('students').updateOne(query, newValue, function (err, res) {
    if (err) throw err
    console.log(`record(s) aggiornati`)
    db.close()
  })
})

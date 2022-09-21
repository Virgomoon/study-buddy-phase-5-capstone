# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
math = Subject.create(title: "Math")
literature = Subject.create(title: "Literature")
science = Subject.create(title: "Science")
computer_science = Subject.create(title: "Computer Science")

braxton = User.create(username: "Brax", email: "Braxton@cool.com" , password_digest: "Braxiz2kool")
sheila = User.create(username: "She-la" , email: "itzmeshe-la-b@tt.com" , password_digest: "RockWithShe123")
randall = User.create(username: "Randolf" , email: "randall@mail.com" , password_digest: "44RandolfThaBlue44")
jillian = User.create(username:"Jill" , email: "Jillian@sweet.com", password_digest: "jillpill2sweet")
zephyr = User.create(username: "Zeph" , email: "zephyr@random.com" , password_digest: "ih8passwords")

note1 = Note.create(entry: "Brax's first note", user_id: 1, subject_id: 2)
note2 = Note.create(entry: "Brax's second note", user_id: 1, subject_id: 2)
note3 = Note.create(entry: "Brax's third note", user_id: 1, subject_id: 3)
note4 = Note.create(entry: "Brax's fourth note", user_id: 1, subject_id: 4)

note5 = Note.create(entry: "She-la's first note", user_id: 2, subject_id: 1)
note6 = Note.create(entry: "She-la's second note", user_id: 2, subject_id: 2)
note7 = Note.create(entry: "She-la's third note", user_id: 2, subject_id: 3)
note8 = Note.create(entry: "She-la's fourth note", user_id: 2, subject_id: 4)

note9 = Note.create(entry: "Randolf's first note", user_id: 3, subject_id: 4)
note10 = Note.create(entry: "Randolf's second note", user_id: 3, subject_id: 4)
note11 = Note.create(entry: "Randolf's third note", user_id: 3, subject_id: 1)
note12 = Note.create(entry: "Randolf's fourth note", user_id: 3, subject_id: 1)

note13 = Note.create(entry: "Jill's first note", user_id: 4 , subject_id: 2)
note14 = Note.create(entry: "Jill's second note", user_id: 4,subject_id: 2)
note15 = Note.create(entry: "Jill's third note", user_id: 4, subject_id: 3)
note16 = Note.create(entry: "Jill's fourth note", user_id: 4, subject_id: 4)

note17 = Note.create(entry: "Zeph's first note", user_id: 5, subject_id: 1)
note18 = Note.create(entry: "Zeph's second note", user_id: 5, subject_id: 1)
note19 = Note.create(entry: "Zeph's third note", user_id: 5, subject_id: 3)
note20 = Note.create(entry: "Zeph's fourth note", user_id: 5, subject_id: 3)

braxbudd1 = Buddy.create(user_id: 1 , buddy_id: 2)
braxbudd2 = Buddy.create(user_id: 1 , buddy_id: 3)
braxbudd3 = Buddy.create(user_id: 1 , buddy_id: 5)

shebudd1 = Buddy.create(user_id: 2, buddy_id: 1)
shebudd2 = Buddy.create(user_id: 2, buddy_id: 4)

ranbudd1 = Buddy.create(user_id: 3, buddy_id: 1)
ranbudd2 = Buddy.create(user_id: 3, buddy_id: 5)
ranbudd3 = Buddy.create(user_id: 3, buddy_id: 4)

jillbudd1 = Buddy.create(user_id: 4 , buddy_id: 2)
jillbudd2 = Buddy.create(user_id: 4, buddy_id: 3)

zephbudd1 = Buddy.create(user_id: 5, buddy_id: 1)
zephbudd2 = Buddy.create(user_id: 5, buddy_id: 3)

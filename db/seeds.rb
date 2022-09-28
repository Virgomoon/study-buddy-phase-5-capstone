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

braxton = User.create(first_name: "Braxton", last_name: "Bricks", username: "Brax", email: "Braxton@cool.com", password: "Braxiz2kool", password_confirmation:"Braxiz2kool" )
sheila = User.create(first_name: "Sheila", last_name: "Bee", username: "She-la" , email: "itzmeshe-la-b@tt.com", password: "RockWithShe123", password_confirmation: "RockWithShe123")
randall = User.create(first_name: "Randall", last_name: "Shire", username: "Randolf" , email: "randall@mail.com", password: "44RandolfThaBlue44", password_confirmation: "44RandolfThaBlue44")
jillian = User.create(first_name: "Jillian", last_name: "Jones", username:"Jill" , email: "Jillian@sweet.com", password: "jillpill2sweet", password_confirmation: "jillpill2sweet")
zephyr = User.create(first_name: "Zephyr", last_name: "Reli", username: "Zeph" , email: "zephyr@random.com", password: "ih8passwords", password_confirmation: "ih8passwords")

note1 = Note.create(title: "Brax's first note", entry: "Brax's first note", user_id: 1, subject_id: 2)
note2 = Note.create(title: "Brax's second note", entry: "Brax's second note", user_id: 1, subject_id: 2)
note3 = Note.create(title: "Brax's third note", entry: "Brax's third note", user_id: 1, subject_id: 3)
note4 = Note.create(title: "Brax's fourth note", entry: "Brax's fourth note", user_id: 1, subject_id: 4)

note5 = Note.create(title: "She-la's first note", entry: "She-la's first note", user_id: 2, subject_id: 1)
note6 = Note.create(title: "She-la's second note", entry: "She-la's second note", user_id: 2, subject_id: 2)
note7 = Note.create(title: "She-la's third note", entry: "She-la's third note", user_id: 2, subject_id: 3)
note8 = Note.create(title: "She-la's fourth note", entry: "She-la's fourth note", user_id: 2, subject_id: 4)

note9 = Note.create(title: "Randolf's first note", entry: "Randolf's first note", user_id: 3, subject_id: 4)
note10 = Note.create(title: "Randolf's second note", entry: "Randolf's second note", user_id: 3, subject_id: 4)
note11 = Note.create(title: "Randolf's third note", entry: "Randolf's third note", user_id: 3, subject_id: 1)
note12 = Note.create(title: "Randolf's fourth note", entry: "Randolf's fourth note", user_id: 3, subject_id: 1)

note13 = Note.create(title: "Jill's first note", entry: "Jill's first note", user_id: 4 , subject_id: 2)
note14 = Note.create(title: "Jill's second note", entry: "Jill's second note", user_id: 4,subject_id: 2)
note15 = Note.create(title: "Jill's third note", entry: "Jill's third note", user_id: 4, subject_id: 3)
note16 = Note.create(title: "Jill's fourth note", entry: "Jill's fourth note", user_id: 4, subject_id: 4)

note17 = Note.create(title: "Zeph's first note", entry: "Zeph's first note", user_id: 5, subject_id: 1)
note18 = Note.create(title: "Zeph's second note", entry: "Zeph's second note", user_id: 5, subject_id: 1)
note19 = Note.create(title: "Zeph's third note", entry: "Zeph's third note", user_id: 5, subject_id: 3)
note20 = Note.create(title: "Zeph's fourth note", entry: "Zeph's fourth note", user_id: 5, subject_id: 3)

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

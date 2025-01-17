import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity('users')
export class Users { 
   
   @PrimaryGeneratedColumn() 
   'id': number; 
   
   @Column()
   'name': string;  
   
   @Column()
   'age': number; 
}
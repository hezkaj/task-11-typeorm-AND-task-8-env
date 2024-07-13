import dataSource =require("./data");
import { Users } from "./users"

async function createUser (name: string ,age: number){
    await dataSource.createQueryBuilder()
        .insert()
        .into(Users)
        .values([
            { name: name, age: age },
        ])
        .execute()
    return 'Successfully created';
}
async function getOneUser (id: string){
        const user =await dataSource
        .createQueryBuilder()
        .select("user")
        .from(Users, "user")
        .where("user.id = :id", { id: id})
        .getOne()
    return user;
}
async function getAllUsers (){
    const users =await dataSource
        .createQueryBuilder()
        .select("user")
        .from(Users, "user")
        .getMany()
    return users;
}
async function deleteUser (id: string){
    await dataSource
        .createQueryBuilder()
        .delete()
        .from(Users)
        .where("id = :id", { id: id })
        .execute()
    return 'Successfully deleted';
}
async function updateUser (name: string ,age: number, id: string){
    await dataSource
        .createQueryBuilder()
        .update(Users)
        .set({ name: name, age: age })
        .where("id = :id", { id: id })
        .execute()
    return 'Successfully updated';
}
export{createUser,getAllUsers,getOneUser,deleteUser,updateUser}


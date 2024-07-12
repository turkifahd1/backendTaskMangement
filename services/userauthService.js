

const {PrismaClient}=require('@prisma/client')
const BadRequestErrors = require('../errors/badRequests')
const prisma=new PrismaClient()
class NewServices{
  
  // send data
  async post(nwesDate){
    try {
      const exsittitl=await prisma.user.findFirst({where:{title:nwesDate.title}})
      if(exsittitl){
        throw new BadRequestErrors('is fonud')
      }
      const postNews = await prisma.user.create({data:nwesDate});
  
      return postNews
    } catch (err) {
      if(err instanceof BadRequestErrors){
        throw err
      }
      throw err; // إعادة إلقاء الخطأ الأصلي
    }
  }

//Get All Data
async getAllUsers() {
  try {
    const exsit = await prisma.user.findMany();
    if (!exsit) {
      throw new BadRequestErrors(`Data not find`, ErrorCode.USER_NOT_FOUND);
    }
    return exsit;
  } catch (err) {
    if (err instanceof BadRequestErrors) {
      throw err;
    }
    throw err; // إعادة إلقاء الخطأ الأصلي
  }
}


//Get Data by id
  async getID(id) {
    try {
      const exsitId = await prisma.user.findUnique({ where: { id } });;
      if (!exsitId) {
        throw new BadRequestErrors(`ID ${id} not found`, ErrorCode.USER_NOT_FOUND);
      }
      return exsitId;
    } catch (err) {
      if (err instanceof BadRequestErrors) {
        throw err;
      }
      throw err; // إعادة إلقاء الخطأ الأصلي
    }
  }

  


  //Delete 
  async deleteUser(id) {
    try {
    
      
      const exsitId = await prisma.user.delete({ where: { id } });
    ;
      if (!exsitId) {
        throw new BadRequestErrors(`ID ${id} not found`, ErrorCode.USER_NOT_FOUND);
      }
      return exsitId;
    } catch (err) {
      if (err instanceof BadRequestErrors) {
        throw err;
      }
      throw err; // إعادة إلقاء الخطأ الأصلي
    }
  }

  ///abbdate data
  async updateUser(id, data) {
  
    const exsitId = await prisma.user.findUnique({ where: { id } });
    if (!exsitId) {
      throw new BadRequestErrors(`ID ${id} not found`, ErrorCode.USER_NOT_FOUND);
    }
    return await prisma.user.update({
      where: { id },
      data
    });
  
  }
}


module.exports=new NewServices()
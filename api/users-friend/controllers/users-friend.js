"use strict";
module.exports = {
  findUserFriends: async (ctx) => {
    try {

      const id = ctx.params.userId || "0000000"

      let data = await strapi.services['users-friend'].find( {"userFriendId1" :id})
      let data2 = await strapi.services['users-friend'].find( {"userFriendId2" :id})

      let all = [];
      data?.forEach(elem=>{
        all.push(elem)
      })
      data2?.forEach(elem=>{
        all.push(elem)
      })

      let allUsers = []

      all.forEach(userFriend => {

        let promise = new Promise( async (resolve, reject) => {
          console.log(strapi.services)
         let data = await strapi.services.user.find({"userId": userFriend.id})
            resolve(data)
        });

        promise.then((res)=> allUsers.push(res))

      })

      console.log(allUsers)

      return  all
    } catch (err) {
      return err;
    }
    finally {
    }
  },
};

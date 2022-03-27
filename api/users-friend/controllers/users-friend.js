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

      
      // use map() to perform a fetch and handle the response for each url
      let result = await Promise.all(all.map(  (userFriend)  =>  {

        if(userFriend.userFriendId1 == id)
        {
          return strapi.db.query('user', 'users-permissions').findOne({"id": userFriend.userFriendId2});
        }else(userFriend.userFriendId2 == id)
        {
          return strapi.db.query('user', 'users-permissions').findOne({"id": userFriend.userFriendId1});
        }
      }))
      .then(data => {
        return  data
      }).catch(err => {
        return {status:"err"}
      })

      console.log(result)
      return result;
    } catch (err) {
      return err;
    }
    finally {
    }
  },
};

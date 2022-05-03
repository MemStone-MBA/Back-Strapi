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

      return result;
    } catch (err) {
      return err;
    }
    finally {
    }
  },
  findUserFriendsByUsername: async (ctx) => {
    try {


      const username = ctx.params.username
      const userID = ctx.params.id

      if(!username || !userID){
        return {"status": 404, "message": "params not found" }
      }

      let userFriend = await strapi.db.query('user', 'users-permissions').findOne({"username": username});

      if(!userFriend || !userFriend.id){
        return {"status": 404, "message": "Friend not found"  }
      }

      let res = await strapi.services['users-friend'].create(
        {
          "userFriendId1" : userFriend.id,
          "userFriendId2" : userID
        }
      ).catch((err) => {
        console.log(err)
      }
      )

      return {"status" : 200}

    } catch (err) {
      return err;
    }
    finally {
    }
  },
};

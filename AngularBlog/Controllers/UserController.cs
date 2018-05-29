using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlog.Models;

namespace AngularBlog.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public List<user> getAllUsers()
        {
            using(BlogEntities entities = new BlogEntities())
            {
               var UserList = entities.users.ToList();
                return UserList;
            }
        }

        [HttpGet]
        public user GetUser(int id)
        {
            using (BlogEntities entities = new BlogEntities())
            {
                var tmpUser = entities.users.Where(x => x.id == id).FirstOrDefault();
                return tmpUser;
            }
        }
    }
}

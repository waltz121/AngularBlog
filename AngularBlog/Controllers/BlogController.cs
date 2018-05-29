using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AngularBlog.Models;
using AngularBlog.Models.ViewModel;
using System.Data.Entity;

namespace AngularBlog.Controllers
{
    public class BlogController : ApiController
    {
        [HttpPost]
        public HttpResponseMessage saveBlogInfo([FromBody]Blog blogFM)
        {
            using(BlogEntities entities = new BlogEntities())
            {
                if(blogFM.id == 0)
                {
                    entities.Blogs.Add(blogFM);
                }
                else
                {
                    entities.Entry(blogFM).State = EntityState.Modified;     
                }
                
                entities.SaveChanges();
            }

            return Request.CreateResponse(HttpStatusCode.OK);
        }

        [HttpGet]
        public List<BlogViewModel> getAllBlogPosts()
        {
             using (BlogEntities entities = new BlogEntities())
             {

                var resultList = from blog in entities.Blogs.ToList()
                                 select new BlogViewModel
                                 {
                                     id = blog.id,
                                     title = blog.title,
                                     body = blog.body,
                                     user_id = blog.user_id,
                                     publish_date = blog.publish_date.Value,
                                     allow_publish = blog.allow_publish.Value,
                                     created = blog.created.Value,
                                     updated = blog.updated.Value
                                 };

                var vm = resultList.ToList();

                return vm;                                        
             }
        }

        [HttpPut]
        public HttpResponseMessage deleteBlog(int id)
        {
            using(BlogEntities entities = new BlogEntities())
            {
                var tmpBlog = entities.Blogs.Where(x => x.id == id).FirstOrDefault();

                entities.Blogs.Remove(tmpBlog);
                entities.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK);
            }
        }
    }
}

function post(parent, args, context, info) {
    return context.prisma.posts()
  }
  
  module.exports = {
    post,
  }
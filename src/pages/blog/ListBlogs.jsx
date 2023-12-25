import React from 'react'
import MainLayout from '../../layout/MainLayout'
import BlogPagesList from '../../components/blogs/BlogPagesList'

const ListBlogs = () => {
  return (
    <MainLayout>
        <BlogPagesList />
    </MainLayout>
  )
}

export default ListBlogs
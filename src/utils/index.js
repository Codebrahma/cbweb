import React from "react"
import { I } from 'bricks'
export const getCategory = (frontmatter)=>{
  try {
    return frontmatter.category[0]
  } catch {
    return null
  }
}
export const getTags = (frontmatter)=>{
  try {
    return frontmatter.tags.map((tag,i)=>(
      <I key={tag}>#{tag}{ isLast(frontmatter.tags, i)? '': ','} </I>
    ))
  } catch {
    return null
  }
}

export const isLast = (arr, index)=> arr.length-1 === index
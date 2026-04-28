import React from 'react'

function Box({title,boxSlogan, tags}: {title: string,boxSlogan: string, tags: string[]}) {
  return (
    <div id="box">
          <h3>{title}</h3>
          <p>{boxSlogan}</p>
          <div id='tags'>
      {tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
          </div>
    </div>
  )
}

export default Box

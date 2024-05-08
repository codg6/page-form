import React from 'react'
import { MdOutlinePublish } from 'react-icons/md'
import { Button } from './ui/button'

function PublishFormBtn() {
  return (
    <Button className="gap-2 text-white bg-gradient-to-t from-indigo-400 to-cyan-400">
        <MdOutlinePublish className="h-4 w-4"/>
        Preview
    </Button>
  )
}

export default PublishFormBtn
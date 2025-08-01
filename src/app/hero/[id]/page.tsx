import React from 'react'

export default async function HeroDetail({params}: {params: Promise<{id: string}>}) {

  const { id } = await params
  return (
    <div>page</div>
  )
}

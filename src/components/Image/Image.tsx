const Image = (props: any) => {
  const { width, height, src, radius } = props
  const { onclick } = props

  return (
    <img src={src} width={width} height={height} style={{ borderRadius: radius }} onClick={onclick} alt="" />
  )
}

export default Image
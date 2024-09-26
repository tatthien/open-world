import { Topic } from "@/types"
import { formatDate } from "@/utils/formatDate"
import { Box, Title, Text } from "@mantine/core"
import style from './TopicItem.module.css'
import Image from "next/image"
import Link from "next/link"

export function TopicItem({ item }: { item: Topic }) {
  const { _id, title, backgroundColor, backgroundImage, createdAt } = item

  return (
    <Link href={`/topics/${_id}`} style={{ textDecoration: 'none' }}>
      <Box className={style.wrapper}>
        <Box className={style.content}>
          <Title order={2} className={style.title}>{title}</Title>
          <Text className={style.metadata}>{formatDate(createdAt, 'DD/MM/YYYY')}</Text>
        </Box>
        {backgroundImage &&
          <Image className={style.background} src={backgroundImage || ''} alt={title} fill />
        }
        <Box className={style.overlay} style={{
          '--background-image': `url(${backgroundImage || ''})`,
          '--background-color': `${backgroundColor || '#fff'}`,
        }} />
      </Box>
    </Link>
  )
}

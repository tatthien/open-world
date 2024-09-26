'use client'

import { Alert, Button, Container, Flex, Stack } from "@mantine/core";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <Container>
      <Stack py={40} gap={12} justify="center">
        <Alert>Có lỗi xảy ra: {error.message}</Alert>
        <Flex align='center' justify='center' gap={8}>
          <Button component={Link} href={'/'} color='dark'>Về trang chủ</Button>
          <Button variant="light" color='dark' onClick={reset}>Tải lại</Button>
        </Flex>
      </Stack>
    </Container>
  )
}

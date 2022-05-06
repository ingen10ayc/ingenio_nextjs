import Link from 'next/link'
import { Card, Image, Row } from '@nextui-org/react';

export const Menu = ({ isMd }) => {
  return (
    <>
      <div>
        <Row align='center'>
          <Link href="/" passHref >
              <Card css={{ borderRadius: 0, background: "#14279B" }} >
                <Image src="./images/logo.png" alt="IngenIO" width={200} css={{ marginTop: 20 }} />
              </Card>
          </Link>
        </Row>
      </div>
    </>
  )
}

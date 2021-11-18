import React from 'react'
import { LoadingOutlined } from '@ant-design/icons'
import { Container } from './style'

const PageLoading: React.FC = () => {
    return (
        <Container>
            <LoadingOutlined style={{ fontSize: '50px' }} />
        </Container>
    )
}

export default PageLoading

import React, { Suspense } from 'react';
import { Layout } from 'antd'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { Container } from './style'
import Header from './components/Header'
import PageLoading from './components/Loading/Page'
import Home from './pages/home'
import NotFound from './pages/error/404'

const { Content } = Layout;
const About = React.lazy(() => import('./pages/about'))

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Container>
          <Header />
          <Content>
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Content>
        </Container>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;

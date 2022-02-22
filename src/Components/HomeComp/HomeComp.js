import React from 'react'
import ServiceComp from '../ServicesComp/ServiceComp'
import styled from 'styled-components'
import pic1 from '../img/pic1.jpg'
import pic2 from '../img/pic2.jpg'

export default function HomeComp() {
  return (
    <div>
      <Container>
        <ServiceComp photo={pic1} title="React Atom" info='Quite frequently you might want to use a component, but change it slightly for a single case. Now, you could pass in an interpolated function and change them based on some props, but that quite a lot of effort for overriding the styles once.'/>
        <ServiceComp reverse='row-reverse' photo={pic2} title='Mongodb' info='
If you use a package manager like yarn that supports the "resolutions" package.json field, we also highly recommend you add an entry to it as well corresponding to the major version range.'/>
      </Container>
    </div>
  )
}

const Container = styled.div`
  background: rgb(215,145,1);
  background: linear-gradient(90deg, rgba(215,145,1,1) 0%, rgba(13,207,140,1) 0%, rgba(207,83,16,1) 0%, rgba(255,221,132,1) 74%, rgba(255,255,255,0.6418942577030813) 100%);
`;

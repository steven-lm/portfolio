import React from 'react'
import Particles from 'react-particles-js';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: -100vh;
  z-index: -3;
`

function ParticlesBackground() {
  return (
    <Container>
        <Particles
            height="100vh"
            width="100%"
                params={{
                    "particles": {
                        "number": {
                            "value": 40,
                            "density": {
                                "enable": false
                            }
                        },
                        "color": {
                            "value": "#FF6F3C"
                        },
                        "size": {
                            "value": 10,
                            "random": true,
                            "animation": {
                                "speed": 1,
                                "minimumValue ": 1
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "none",
                            "outModes": {
                                "default": "out",
                                "bottom": "bounce"
                            }
                        }
                    }
                }} />
        </Container>
  )
}

export default ParticlesBackground
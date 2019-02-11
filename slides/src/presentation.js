// Import React
import React from 'react';

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Layout,
    Fill,
    Image,
    Link,
    Fit,
    CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import GoplImage from './assets/gopl.png';
import Logo from './assets/logo.svg';

// Require CSS
require('normalize.css');

const theme = createTheme(
    {
        primary: '#62C9DF',
        secondary: 'white',
        tertiary: '#F8D6A7'
    },
    {
        primary: 'Inter',
        secondary: 'Inter'
    }
);

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck
                transition={['slide']}
                transitionDuration={500}
                theme={theme}
                progress="bar"
            >
                <Slide bgColor="primary">
                    <Layout>
                        <Fill>
                            <Heading textSize={200} caps textColor="secondary">
                                Let's
                            </Heading>
                        </Fill>
                        <Fill>
                            <Image src={Logo} width={500} />
                        </Fill>
                    </Layout>
                    <Text
                        margin="10px 0 0"
                        textColor="tertiary"
                        size={1}
                        fit
                        bold
                    >
                        A Golang workshop
                    </Text>
                </Slide>

                <Slide>
                    <Heading>Agenda</Heading>
                    <List>
                        <ListItem>Language overview</ListItem>
                        <ListItem>Examples</ListItem>
                        <ListItem>Install Go</ListItem>
                        <ListItem>Write some code</ListItem>
                    </List>
                </Slide>

                <Slide>
                    <Heading>History</Heading>
                    <List>
                        <ListItem>First appeared: 2009</ListItem>
                        <ListItem>
                            Created by: Robert Griesmer, Rob Pike, Ken Thompson
                        </ListItem>
                        <ListItem>
                            Solve problems at Google for large codebases,
                            cloud-native systems
                        </ListItem>
                    </List>
                </Slide>

                <Slide>
                    <BlockQuote>
                        <Quote textColor="secondary" textSize="32">
                            Yes. When the three of us [Thompson, Rob Pike, and
                            Robert Griesemer] got started, it was pure research.
                            The three of us got together and decided that we
                            hated C++.
                        </Quote>
                        <Cite>
                            <Link
                                href="http://www.drdobbs.com/open-source/interview-with-ken-thompson/229502480"
                                target="_blank"
                            >
                                Dr. Dobbs interview
                            </Link>
                        </Cite>
                    </BlockQuote>
                </Slide>

                <Slide>
                    <Heading>Language Goals</Heading>
                    <List>
                        <ListItem>Fast compile time</ListItem>
                        <ListItem>Fast, good support for concurrency</ListItem>
                        <ListItem>Readable, usable</ListItem>
                        <ListItem>Low barrier to entry</ListItem>
                        <ListItem>Be better than C++ 😉</ListItem>
                    </List>
                </Slide>

                <Slide>
                    <Heading>Cool stuff</Heading>
                    <List>
                        <ListItem>Statically typed, compiled</ListItem>
                        <ListItem>Lots of compile targets</ListItem>
                        <ListItem>Fast compile time</ListItem>
                        <ListItem>Garbage collection</ListItem>
                        <ListItem>Fast runtime</ListItem>
                        <ListItem>Green threads</ListItem>
                        <ListItem>
                            <Link href="https://golang.org/pkg" target="_blank">
                                Robust standard library
                            </Link>
                        </ListItem>
                    </List>
                </Slide>

                <Slide>
                    <a
                        href="https://asciinema.org/a/g2M4wE6jF03V0HBvjSw6KqWaS"
                        target="_blank"
                    >
                        <img src="https://asciinema.org/a/g2M4wE6jF03V0HBvjSw6KqWaS.svg" />
                    </a>
                </Slide>

                <Slide>
                    <Heading>Who's using Go?</Heading>
                    <List>
                        <ListItem>Google</ListItem>
                        <ListItem>Uber</ListItem>
                        <ListItem>Github</ListItem>
                        <ListItem>Facebook</ListItem>
                        <ListItem>Apple</ListItem>
                        <ListItem>Dropbox</ListItem>
                        <ListItem>Heroku</ListItem>
                        <ListItem>Soon: YOU!</ListItem>
                    </List>
                </Slide>

                <Slide>
                    <Heading>Resources</Heading>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem>Main site: golang.org</ListItem>
                                <ListItem>Blog: blog.golang.org</ListItem>
                                <ListItem>GopherAcademy Slack</ListItem>
                                <ListItem>
                                    The Go Programming Language (gopl.io)
                                </ListItem>
                                <ListItem>Meetups</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <Image src={GoplImage} width={250} />
                        </Fill>
                    </Layout>
                </Slide>

                <Slide>
                    <Heading>Examples</Heading>
                    <List>
                        <ListItem>Basic Server</ListItem>
                        <ListItem>CLI Tool</ListItem>
                        <ListItem>
                            <Link
                                href="https://pingaling.herokuapp.com/"
                                target="_blank"
                            >
                                Pingaling
                            </Link>
                        </ListItem>
                        <ListItem>WebAssembly (demo)</ListItem>
                        <ListItem>
                            <Link
                                href="https://bobcob7.github.io/wasm-basic-triangle"
                                target="_blank"
                            >
                                WebAssembly + WebGL (boring)
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link
                                href="https://stdiopt.github.io/gowasm-experiments/splashy"
                                target="_blank"
                            >
                                WebAssembly + WebGL
                            </Link>
                        </ListItem>
                    </List>
                </Slide>

                <Slide>
                    <Heading>Keywords</Heading>
                </Slide>

                <Slide>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem>break</ListItem>
                                <ListItem>interface</ListItem>
                                <ListItem>case</ListItem>
                                <ListItem>map</ListItem>
                                <ListItem>chan</ListItem>
                                <ListItem>package</ListItem>
                                <ListItem>default</ListItem>
                                <ListItem>select</ListItem>
                                <ListItem>defer</ListItem>
                                <ListItem>struct</ListItem>
                                <ListItem>else</ListItem>
                                <ListItem>switch</ListItem>
                                <ListItem>func</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <List>
                                <ListItem>go</ListItem>
                                <ListItem>goto</ListItem>
                                <ListItem>const</ListItem>
                                <ListItem>range</ListItem>
                                <ListItem>continue</ListItem>
                                <ListItem>return</ListItem>
                                <ListItem>fallthrough</ListItem>
                                <ListItem>type</ListItem>
                                <ListItem>for</ListItem>
                                <ListItem>var</ListItem>
                                <ListItem>if</ListItem>
                                <ListItem>import</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                    <Heading>Keywords</Heading>
                </Slide>

                <Slide>
                    <Heading>Functions</Heading>
                </Slide>

                <Slide>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem>int</ListItem>
                                <ListItem>int8</ListItem>
                                <ListItem>int16</ListItem>
                                <ListItem>int32</ListItem>
                                <ListItem>int64</ListItem>
                                <ListItem>uint</ListItem>
                                <ListItem>uint8</ListItem>
                                <ListItem>uint32</ListItem>
                                <ListItem>uint64</ListItem>
                                <ListItem>unintptr</ListItem>
                            </List>
                        </Fill>
                        <Fill>
                            <List>
                                <ListItem>float32</ListItem>
                                <ListItem>float64</ListItem>
                                <ListItem>complex128</ListItem>
                                <ListItem>complex64</ListItem>
                                <ListItem>bool</ListItem>
                                <ListItem>byte</ListItem>
                                <ListItem>rune</ListItem>
                                <ListItem>string</ListItem>
                                <ListItem>error</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide>
                    <Heading>Functions</Heading>
                </Slide>

                <Slide>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem>make</ListItem>
                                <ListItem>len</ListItem>
                                <ListItem>cap</ListItem>
                                <ListItem>new</ListItem>
                                <ListItem>append</ListItem>
                                <ListItem>copy</ListItem>
                                <ListItem>close</ListItem>
                                <ListItem>delete</ListItem>
                                <ListItem>complex</ListItem>
                                <ListItem>real</ListItem>
                                <ListItem>imag</ListItem>
                                <ListItem>panic</ListItem>
                                <ListItem>recover</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide>
                    <Heading>Constants</Heading>
                </Slide>

                <Slide>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem>true</ListItem>
                                <ListItem>false</ListItem>
                                <ListItem>iota</ListItem>
                                <ListItem>nil</ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide>
                    <Heading>Installing</Heading>
                </Slide>

                <Slide>
                    <Layout>
                        <Fill>
                            <List>
                                <ListItem>
                                    https://golang.org/doc/install
                                </ListItem>
                                <ListItem>
                                    <code>brew install go</code>
                                </ListItem>
                                <ListItem>
                                    <code>export GOPATH=$(go env GOPATH)</code>
                                </ListItem>
                            </List>
                        </Fill>
                    </Layout>
                </Slide>

                <Slide>
                    <Heading>Hello, world!</Heading>
                </Slide>

                <Slide>
                    <Heading>Hands-on</Heading>
                </Slide>
            </Deck>
        );
    }
}

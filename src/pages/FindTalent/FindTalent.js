import classNames from 'classnames/bind'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Avatar from '@mui/joy/Avatar'
import Chip from '@mui/joy/Chip'
import Box from '@mui/joy/Box'
import Card from '@mui/joy/Card'
import CardContent from '@mui/joy/CardContent'
import CardOverflow from '@mui/joy/CardOverflow'
import CardActions from '@mui/joy/CardActions'
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'

import Banner from 'src/pages/components/Banner'
import styles from './FindTalent.module.scss'

const cx = classNames.bind(styles)

function FindTalent() {
    return (
        <div>
            <Container>
                <Row>
                    {/* Banner */}
                    <Col xs={12} className={cx('banner-wrapper')}>
                        <Banner title="Find Talents" />
                    </Col>

                    {/* Talents grid */}
                    <Col xs={12}>
                        <Row>
                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Adhil S</h5>
                                        <h6 className={cx('talent-role')}>B.Tech CSE Student</h6>
                                        <p className={cx('talent-bio')}>
                                            I am a fresher at VIT-AP University, pursuing B.Tech
                                            CSE with Specialisation in AI and ML. Passionate about Coding.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Python
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Java
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                HTML,CSS
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <a href="https://in.linkedin.com/in/adhil-s-0b2495294"
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </a>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>

                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Lathika D</h5>
                                        <h6 className={cx('talent-role')}>B.E. CSE Student</h6>
                                        <p className={cx('talent-bio')}>
                                            Hello, I am Lathika, a junior in college, actively exploring
                                            various domains in Computer Science.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                MERN
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Unity
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                C++
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <a href="https://in.linkedin.com/in/lathika-devanand-bb5813224"
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </a>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>

                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Ankam Srinivas</h5>
                                        <h6 className={cx('talent-role')}>Int. M.Tech Student</h6>
                                        <p className={cx('talent-bio')}>
                                        I am a 3rd-year Int. M.Tech student at VIT AP, specializing in Software Engineering, with a keen interest in DevOps and System Design.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Java
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                HTML
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Agile Methodologies
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <a href="https://www.linkedin.com/in/ankamsrinivas/"
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </a>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>

                            <Col xs={6} md={4} lg={3}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                                        <Avatar src="/static/images/avatar/1.jpg" sx={{ '--Avatar-size': '8rem' }} />
                                        <Chip
                                            size="lg"
                                            variant="soft"
                                            color="primary"
                                            sx={{ mt: -1, border: '3px solid', borderColor: 'background.surface' }}
                                        >
                                            PRO
                                        </Chip>
                                        <h5 className={cx('talent-name')}>Gokul</h5>
                                        <h6 className={cx('talent-role')}>Aerospace Engineering Student</h6>
                                        <p className={cx('talent-bio')}>
                                            I am Gokul, 2nd year Aerospace Engineering student at SNS College of Technology, Coimbatore.
                                            I am a beginner to software and working on generative AI projects.
                                        </p>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: 2,
                                                mt: 1,
                                                '& > button': { borderRadius: '2rem' },
                                            }}
                                        >
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Python
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                Langchain
                                            </Chip>
                                            <Chip
                                                variant="soft"
                                                color="neutral"
                                                size="lg"
                                                sx={{ pointerEvents: 'none' }}
                                            >
                                                C++
                                            </Chip>
                                        </Box>
                                    </CardContent>
                                    <CardOverflow sx={{ mt: 2 }}>
                                        <CardActions buttonFlex="1" sx={{ justifyContent: 'center' }}>
                                            <a href="https://in.linkedin.com/in/gokul-s-sns"
                                                className={cx(
                                                    'contact-btn',
                                                    'btn',
                                                    'rounded-pill',
                                                    'btn-outline-style',
                                                )}
                                            >
                                                Contact
                                                <MailOutlineOutlinedIcon />
                                            </a>
                                        </CardActions>
                                    </CardOverflow>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default FindTalent

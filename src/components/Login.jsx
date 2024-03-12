import styled from "styled-components";

const Login = () => {
    return (
        <div>
        <Container>
            <Content>
            <Cta>
                <CtaLogoOne src="images/cta-logo-one.svg" alt="first logo" />
                <SignUp>get all there</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional
                    fee with a Disney+ subscription. As of 03/26/21, the price of
                    Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
            </Cta>
            <BgImg />
            </Content>
        </Container>
        </div>
    );
};

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 80px 40px;
    height: 100%;
`;
const BgImg = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`;
const Cta = styled.div`
    max-width: 650px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
`;
const CtaLogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 10px;
    display: block;
    width: 100%;
`;
const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    text-transform: uppercase;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
    background-color: #0483ee;
    }
    transition: all 0.5s;
`;
const Description = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 12px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`
const CTALogoTwo = styled.img`
    max-width: 600px;
    margin-bottom: 20px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`;

export default Login;

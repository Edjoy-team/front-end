import Document, {
    DocumentContext,
    Html,
    Main,
    Head,
    NextScript,
} from 'next/document';
export const config = { amp: true };

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta name='title' content='Edjoy' />
                    <meta
                        name='description'
                        content='Edjoy - Your Favorite Educational Experience'
                    />
                    <meta
                        name='keywords'
                        content='Edjoy, edjoy, learn, study, education'
                    />
                    <meta name='robots' content='index, follow' />
                    <meta
                        httpEquiv='Content-Type'
                        content='text/html; charset=utf-8'
                    />
                    <meta name='language' content='English' />
                    <meta property='og:type' content='website' />
                    <meta property='og:url' content='https://edjoy.fun/' />
                    <meta property='og:title' content='Edjoy' />
                    <meta
                        property='og:description'
                        content='Edjoy - Your Favorite Educational Experience'
                    />
                    <meta
                        property='og:image'
                        content='https://media.discordapp.net/attachments/1000776705885085787/1008474178971779162/tbqgiggd.png'
                    />
                    <meta
                        property='twitter:card'
                        content='summary_large_image'
                    />
                    <meta property='twitter:url' content='https://edjoy.fun/' />
                    <meta property='twitter:title' content='Edjoy' />
                    <meta
                        property='twitter:description'
                        content='Edjoy - Your Favorite Educational Experience'
                    />
                    <meta
                        property='twitter:image'
                        content='https://media.discordapp.net/attachments/1000776705885085787/1008474178971779162/tbqgiggd.png'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'
                        rel='stylesheet'
                    />
                    <link
                        rel='icon'
                        type='image/x-icon'
                        href='/icons/favicon.ico'
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

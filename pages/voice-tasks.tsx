import { Anchor } from "@twilio-paste/core/anchor";
import { Box } from "@twilio-paste/core/box";
import { Heading } from "@twilio-paste/core/heading";
import { ListItem, UnorderedList } from "@twilio-paste/core/list";
import { Paragraph } from "@twilio-paste/core/paragraph";
import { Separator } from "@twilio-paste/core/separator";
import type { NextPage } from "next";
import Head from "next/head";
import { Stack } from '@twilio-paste/core/stack';
import { Card } from "@twilio-paste/core";
import { Button } from "@twilio-paste/core";

const Demos: NextPage = () => {
  return (
    
    <Box as="main" padding="space70">
      <Head>
        <title>Tasks Features Info Template Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" variant="heading10">
        Voice Based Tasks
      </Heading>
      <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Return to home page by clicking {' '}  <Anchor href="/">Home</Anchor>.
      </Paragraph>
      <Separator orientation="horizontal" verticalSpacing="space120" />
      <Heading as="h2" variant="heading20">
        Connie Voice Features
      </Heading>

      <UnorderedList>
      <ListItem>
          <Heading as="h3" variant="heading30">
            <Anchor href="https://outbound-messaging-v2-6965-dev.twil.io/index.html#/login" showExternal>
            🔄 Connie Direct (Inbound / Outbound)
            </Anchor>
          </Heading>
          <Paragraph>
            Direct voice let's you accept, place and manage live phone calls from one, unified screen.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Heading as="h3" variant="heading30">
            <Anchor href="https://outbound-messaging-v2-6965-dev.twil.io/index.html#/login" showExternal>
            🇶 Connie Queue - Callback & Voicmail
            </Anchor>
          </Heading>
          <Paragraph>
          Fully customizable workflows that deliver callback requests and voicemails as tasks.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Heading as="h3" variant="heading30">
            <Anchor href="https://outbound-messaging-v2-6965-dev.twil.io/index.html#/login" showExternal>
            🖱 Click To Call Connie
            </Anchor>
          </Heading>
          <Paragraph>
            Easily transform phone numbers on your website into 'clickable' text. With one tap, your clients will be connected to your team.
          </Paragraph>
        </ListItem>
        <ListItem>
          <Heading as="h3" variant="heading30">
            <Anchor href="https://nextjs.org/docs" showExternal>
              Check back soon for more ...
            </Anchor>
          </Heading>
          <Paragraph>What to know what features we're working on? Check our road map for all of the exciting and powerful new tools coming your way. Also, get notified whenever we release a new feature into production.</Paragraph>
        </ListItem>
      </UnorderedList>
      <Stack orientation="vertical" spacing="space60">
    <Card>
      <Heading as="h3" variant="heading30">What's new with Connie</Heading>
      <Paragraph>Check out our newest product releases on the Connie Roadmap.</Paragraph>
      <Button variant="primary">Roadmap</Button>
    </Card>
    <Card>
      <Heading as="h3" variant="heading30">Connie Docs</Heading>
      <Paragraph>Dig into our Admin Docs. You're covered with everything from SDKs in your favorite languages to sample apps for web, iOS, and Android.</Paragraph>
      <Button variant="secondary">Admin Docs</Button>
    </Card>
  </Stack>
</Box>
  );
};

export default Demos
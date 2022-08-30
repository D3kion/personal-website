import { useState } from 'react';
import Link from 'next/link';
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBrandVk, IconBrandTelegram } from '@tabler/icons';

const LAYOUT_HEADER_HEIGHT = 56;

const useStyles = createStyles(theme => ({
  header: {
    backgroundColor: theme.fn.rgba(theme.colors.indigo[0], 0.9),
    border: 0,
    borderColor: theme.fn.rgba(theme.colors.gray[2], 0.8),
    backdropFilter: 'blur(10px)',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: LAYOUT_HEADER_HEIGHT,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.dark[7],
    fontSize: theme.fontSizes.xl * 1.25,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    cursor: 'pointer',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[9],
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface LayoutHeaderProps {
  links: { link: string; label: string }[];
}

export function LayoutHeader({ links }: LayoutHeaderProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map(x => (
    <a
      key={x.label}
      href={x.link}
      className={cx(classes.link, { [classes.linkActive]: active === x.link })}
      onClick={e => {
        e.preventDefault();
        setActive(x.link);
      }}
    >
      {x.label}
    </a>
  ));

  return (
    <Header className={classes.header} height={LAYOUT_HEADER_HEIGHT} fixed>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Link href="/" passHref>
          <Title className={classes.title}>Roman Salikov</Title>
        </Link>

        <Group spacing={4} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandVk size={24} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandTelegram size={24} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandGithub size={24} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}

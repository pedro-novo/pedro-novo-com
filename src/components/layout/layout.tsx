import React from "react";
import Profile from "../profile/profile";
import AboutMe from "../about-me/about-me";
import Skills from "../skills/skills";
import Socials from "../socials/socials";
import Books from "../books/books";
import Referrals from "../referrals/referrals";

const Layout: React.FC = () => {
  return (
    <main>
      <div className="mx-auto max-w-7xl py-10 xl:px-6 2xl:px-8">
        <div className="sm:px-6 sm:py-10 lg:px-8 bg-white rounded-sm shadow-lg">
          <Profile />
          <AboutMe />
          <Skills />
          <Socials />
          <Books />
          <Referrals />
        </div>
      </div>
    </main>
  );
};

export default Layout;

{
  /* <Container pt="xl" size={"xl"}>
      <Paper radius="md" shadow="md" p="lg">
        <Grid>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Box style={{ textAlign: "center" }}>
              <Image
                radius="100%"
                alt="image"
                h={200}
                w={200}
                style={{ display: "inline-block" }}
                src="https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
              />
            </Box>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 8 }}>
            <Box>
              <Title size={"h2"} pb="xs">
                Application for OMEGA Systems
              </Title>
              <Title size={"h4"}>Mid Frontend Engineer</Title>
              <Title size={"h4"} pb="xs">
                Junior Fullstack Engineer
              </Title>
              <Box>
                <Grid>
                  <Grid.Col span={"content"}>
                    <Text fw={"bold"} size="sm">
                      Email:
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={"content"}>
                    <Text size="sm">pedro.novo.93@gmail.com</Text>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span={"content"}>
                    <Text fw={"bold"} size="sm">
                      Contact:
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={"content"}>
                    <Text size="sm">917146077</Text>
                  </Grid.Col>
                </Grid>
                <Grid>
                  <Grid.Col span={"content"}>
                    <Text fw={"bold"} size="sm">
                      Links:
                    </Text>
                  </Grid.Col>
                  {links.map(({ title, href }) => (
                    <Grid.Col key={title} span={"content"}>
                      <Text size="sm">
                        <a href={href} style={{ textDecoration: "none" }} target="_blank">
                          {title}
                        </a>
                      </Text>
                    </Grid.Col>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 12 }}>
            <Text size="sm">
              A self-taught and driven developer with an insatiable curiosity for learning and a passion for crafting
              efficient solutions. Deeply intrigued by architectural principles, design patterns, and industry best
              practices. My coding philosophy centers around clarity, and I take pride in creating code that not only
              functions flawlessly but is also easily understandable by fellow developers. Committed to engaging in
              oriented learning during the early hours of the day and constantly seizing learning opportunities
              throughout the workday, embracing a mindset of continuous growth. I delved into the journey of
              self-education, and in doing so, discovered both the challenges and the personal growth it brings. My
              emotional resilience and empathy have been strengthened through this process, allowing me to become
              attuned to the struggles and emotions of others. As an effective communicator, I’m devoted to mutual
              growth, always valuing the symbiotic nature of shared learning and always eager to contribute and innovate
              in a dynamic team setting.
            </Text>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Frontend Skills</Title>
            <SkillsBar data={feSkills} />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Frontend Tools</Title>
            <FrameworksPie data={feTools} />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Frontend Notes</Title>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Backend Skills</Title>
            <SkillsBar data={beSkills} />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Backend Tools</Title>
            <FrameworksPie data={beTools} />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Backend Notes</Title>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Technical Skills</Title>
            <SkillsBar data={techSkills} />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Technical Tools</Title>
            <FrameworksPie data={otherTools} />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <Title size="h5">Technical Notes</Title>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 12 }}>Social</Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 12 }}>Books</Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 12 }}>Referalls</Grid.Col>
        </Grid>
      </Paper>
    </Container> */
}

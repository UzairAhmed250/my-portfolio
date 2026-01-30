import React from 'react';
import Timeline from './Timeline';
import GlassCard from '@/components/ui/GlassCard';
import StatCard from '@/components/ui/StatCard';
import ContactLink from '@/components/ui/ContactLink';
import SectionHeading from '@/components/ui/SectionHeading';
import SkillCard from '@/components/ui/SkillCard';
import {
  ClockIcon,
  EducationIcon,
  WrenchIcon,
  PhoneIcon,
  CursorIcon,
} from '@/components/icons';
import {
  timelineItems,
  stats,
  contactLinks,
  skillCategories,
  education,
} from '@/utils/about/data';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="section-container">
        {/* Main About Section */}
        <div className="mb-16">
          <h2 className="section-title pb-2">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <GlassCard className="lg:col-span-2">
              <div className="max-w-3xl">
                <p className="mb-6 text-lg">
                  I'm <span className="text-mauve font-semibold">Uzair Ahmed</span>, a Full Stack Developer with 1.5+ years of experience
                  building and deploying scalable web applications using modern JavaScript frameworks. Based in Karachi, Pakistan, 
                  I have a proven track record in leading teams, optimizing code, and delivering client-focused solutions.
                </p>
                <p className="mb-6 text-slate">
                  My expertise lies in creating secure, scalable solutions that deliver exceptional user experiences. 
                  I've been promoted from intern to senior developer at Jtechsight, where I've developed 4+ full-stack 
                  applications and led development teams to ensure high-quality code and efficient workflows.
                </p>
                <p className="text-slate">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source
                  projects, and sharing knowledge with the developer community.
                </p>
              
                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {stats.map((stat, index) => (
                    <StatCard key={index} value={stat.value} label={stat.label} />
                  ))}
                </div>
              </div>
            </GlassCard>
            
            {/* Contact Info */}
            <GlassCard>
              <h3 className="text-xl font-bold text-seashell mb-6 flex items-center">
                <span className="mr-2 text-mauve"><PhoneIcon size={20} /></span>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <ContactLink key={index} {...link} />
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-mauve/10 rounded-lg border border-mauve/20">
                <div className="flex items-center mb-2">
                  <span className="text-mauve mr-2"><CursorIcon /></span>
                  <h4 className="text-sm font-medium text-seashell">Current availability</h4>
                </div>
                <p className="text-xs text-slate">Available for freelance projects and full-time opportunities. Let's discuss how I can help your team succeed.</p>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* My Journey */}
        <div className="mb-16">
          <SectionHeading icon={<ClockIcon />} title="My Journey" />
          <Timeline items={timelineItems} />
        </div>

        {/* Education */}
        <div className="mb-16">
          <SectionHeading icon={<EducationIcon />} title="Education" />
          <GlassCard>
            <div className="flex items-start">
              <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-deep-purple/40 rounded-lg border border-mauve/20 mr-6">
                <span className="text-mauve"><EducationIcon size={28} /></span>
              </div>
              <div>
                <div className="bg-mauve/10 text-mauve text-xs font-medium px-3 py-1 rounded-full w-fit mb-2">{education.period}</div>
                <h4 className="text-xl font-semibold text-seashell mb-2">{education.degree}</h4>
                <p className="text-mauve font-medium">{education.institution}</p>
                <p className="mt-4 text-slate">{education.coursework}</p>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Skills Matrix */}
        <div>
          <SectionHeading icon={<WrenchIcon />} title="Skills Matrix" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCard key={index} {...category} />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-purple-navy/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-mauve/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutMe;

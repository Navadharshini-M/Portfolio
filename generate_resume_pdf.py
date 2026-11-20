import os
import shutil
from reportlab.lib.pagesizes import A4
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER, TA_LEFT, TA_RIGHT, TA_JUSTIFY

pdf_path = r'd:\Navadharshini_portfolio\public\Nava_Dharshini_Resume.pdf'

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=A4,
    leftMargin=36,
    rightMargin=36,
    topMargin=26,
    bottomMargin=24
)

styles = getSampleStyleSheet()

title_style = ParagraphStyle(
    'DocTitle',
    fontName='Times-Bold',
    fontSize=18,
    leading=21,
    alignment=TA_CENTER,
    textColor=colors.black
)

contact_style = ParagraphStyle(
    'Contact',
    fontName='Times-Roman',
    fontSize=9,
    leading=12,
    alignment=TA_CENTER,
    textColor=colors.HexColor('#111111')
)

section_heading = ParagraphStyle(
    'SectionHeading',
    fontName='Times-Bold',
    fontSize=10,
    leading=12,
    textColor=colors.black,
    spaceBefore=3,
    spaceAfter=1
)

body_style = ParagraphStyle(
    'Body',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=11,
    textColor=colors.HexColor('#111111')
)

body_justify = ParagraphStyle(
    'BodyJustify',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=11,
    alignment=TA_JUSTIFY,
    textColor=colors.HexColor('#111111')
)

bullet_style = ParagraphStyle(
    'Bullet',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=10.5,
    leftIndent=10,
    textColor=colors.HexColor('#111111')
)

project_link_style = ParagraphStyle(
    'ProjLink',
    fontName='Times-Roman',
    fontSize=8.5,
    leading=10.5,
    leftIndent=10,
    textColor=colors.HexColor('#0000EE')
)

story = []

# Title & Contact
story.append(Paragraph('NAVA DHARSHINI M', title_style))
story.append(Spacer(1, 1))
story.append(Paragraph('8148291212 &nbsp;|&nbsp; <a href="mailto:navadharshini2004@gmail.com"><u>navadharshini2004@gmail.com</u></a>', contact_style))
story.append(Paragraph('Sattur, Virudhunagar, Tamil Nadu', contact_style))
story.append(Paragraph('<a href="https://www.linkedin.com/in/navadharshini-m-76b3602ab"><u>LinkedIn</u></a> &nbsp;|&nbsp; <a href="https://github.com/Navadharshini-M"><u>GitHub</u></a>', contact_style))
story.append(Spacer(1, 3))

def add_section_header(title):
    story.append(Paragraph(title, section_heading))
    story.append(HRFlowable(width="100%", thickness=0.75, color=colors.black, spaceBefore=1, spaceAfter=2.5))

# 1. PROFESSIONAL SUMMARY
add_section_header('PROFESSIONAL SUMMARY')
summary_text = 'Passionate Front-End Developer and B.Tech graduate in Artificial Intelligence and Data Science with hands-on experience in building responsive and user-friendly web interfaces through internships and freelance projects. Skilled in HTML, CSS, JavaScript, React.js and Tailwind CSS. Experienced in AI-assisted development tools for creating, improving and debugging front-end applications. Interested in developing clean, responsive and accessible web experiences.'
story.append(Paragraph(summary_text, body_justify))
story.append(Spacer(1, 2))

# 2. EDUCATION
add_section_header('EDUCATION')
edu_data = [
    [Paragraph('<b>B.Tech – Artificial Intelligence &amp; Data Science</b>', body_style), Paragraph('2022 – 2026', ParagraphStyle('R', parent=body_style, alignment=TA_RIGHT))],
    [Paragraph('PSR Engineering College', body_style), Paragraph('CGPA: 7.5 / 10', ParagraphStyle('R', parent=body_style, alignment=TA_RIGHT))]
]
t_edu = Table(edu_data, colWidths=[380, 143])
t_edu.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
]))
story.append(t_edu)
story.append(Spacer(1, 2))

# 3. TECHNICAL SKILLS
add_section_header('TECHNICAL SKILLS')
skills = [
    '<b>Front-End:</b> HTML5, CSS3, JavaScript, React.js',
    '<b>CSS Frameworks:</b> Tailwind CSS',
    '<b>Development:</b> Responsive Web Design, Flexbox, CSS Grid, Reusable Components, Props, React Hooks, Axios',
    '<b>Tools:</b> VS Code, Git, GitHub, Vite',
    '<b>AI Tools:</b> ChatGPT, Antigravity, AI-Assisted Development',
    '<b>Other Skills:</b> Python, SQL, Microsoft Excel'
]
for s in skills:
    story.append(Paragraph(s, body_style))
story.append(Spacer(1, 2))

# 4. PROFESSIONAL EXPERIENCE
add_section_header('PROFESSIONAL EXPERIENCE')

exp1 = [
    [Paragraph('<b>Freelance Front-End Developer</b>', body_style), Paragraph('<i>Client Projects</i>', ParagraphStyle('R', parent=body_style, alignment=TA_RIGHT))]
]
t_exp1 = Table(exp1, colWidths=[380, 143])
t_exp1.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
]))
story.append(t_exp1)
story.append(Paragraph('&bull; Completed three client-based website development projects with a focus on responsive and user-friendly front-end interfaces.', bullet_style))
story.append(Paragraph('&bull; Developed website interfaces using HTML, CSS, JavaScript and modern front-end tools.', bullet_style))
story.append(Paragraph('&bull; Used AI-assisted tools to support UI development, debugging and improving development workflow.', bullet_style))
story.append(Spacer(1, 1.5))

exp2 = [
    [Paragraph('<b>UpgradeNow Technologies – Mobile App Development</b>', body_style), Paragraph('July 2024', ParagraphStyle('R', parent=body_style, alignment=TA_RIGHT))]
]
t_exp2 = Table(exp2, colWidths=[380, 143])
t_exp2.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
]))
story.append(t_exp2)
story.append(Paragraph('&bull; Completed a 15-day intensive internship on Microsoft Power Apps.', bullet_style))
story.append(Paragraph('&bull; Developed a dynamic mobile application with interactive UI components.', bullet_style))
story.append(Spacer(1, 1.5))

exp3 = [
    [Paragraph('<b>Novanector Services Pvt. Ltd., Dehradun – Web Development</b>', body_style), Paragraph('Dec 2024 – Jan 2025', ParagraphStyle('R', parent=body_style, alignment=TA_RIGHT))]
]
t_exp3 = Table(exp3, colWidths=[380, 143])
t_exp3.setStyle(TableStyle([
    ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ('LEFTPADDING', (0,0), (-1,-1), 0),
    ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ('TOPPADDING', (0,0), (-1,-1), 0.5),
    ('BOTTOMPADDING', (0,0), (-1,-1), 0.5),
]))
story.append(t_exp3)
story.append(Paragraph('&bull; Completed a 1-month internship on full-stack web development.', bullet_style))
story.append(Paragraph('&bull; Developed and deployed an online store with a functional product cart system.', bullet_style))
story.append(Spacer(1, 2))

# 5. PROJECTS
add_section_header('PROJECTS')

story.append(Paragraph('<b>Pokkisham Steel Doors – Client Website</b>', body_style))
story.append(Paragraph('<a href="https://pokkisham-steel-doors.vercel.app"><u>pokkisham-steel-doors.vercel.app</u></a>', project_link_style))

story.append(Paragraph('<b>Uyirsaaru – Client Website</b>', body_style))
story.append(Paragraph('<a href="https://uyirsaaru.com"><u>uyirsaaru.com</u></a>', project_link_style))

story.append(Paragraph('<b>Sarvam Care Hospital – Client Website</b>', body_style))
story.append(Paragraph('<a href="https://sarvamcarehospital.in"><u>sarvamcarehospital.in</u></a>', project_link_style))

story.append(Paragraph('<b>NexPath – Career Guidance Web Application</b>', body_style))
story.append(Paragraph('&bull; Developed a career guidance platform to help students explore career paths and learning resources.', bullet_style))
story.append(Paragraph('&bull; Built responsive front-end interfaces using React.', bullet_style))

story.append(Paragraph('<b>Election Analytics – Voter Turnout &amp; Issue Sentiment</b>', body_style))
story.append(Paragraph('&bull; Developed a web-based system to analyze voter feedback and visualize regional trends.', bullet_style))
story.append(Paragraph('&bull; Worked with React, Flask and MongoDB.', bullet_style))
story.append(Spacer(1, 2))

# 6. CERTIFICATIONS & WORKSHOPS
add_section_header('CERTIFICATIONS & WORKSHOPS')
story.append(Paragraph('&bull; JavaScript – PORTALAM', bullet_style))
story.append(Paragraph('&bull; Chatbot using NLP – NOVITECH', bullet_style))
story.append(Paragraph('&bull; Embedded Systems Workshop', bullet_style))
story.append(Spacer(1, 2))

# 7. SOFT SKILLS & LANGUAGES
add_section_header('SOFT SKILLS & LANGUAGES')
story.append(Paragraph('<b>Soft Skills:</b> Problem Solving &nbsp;|&nbsp; Critical Thinking &nbsp;|&nbsp; Team Collaboration &nbsp;|&nbsp; Adaptability &nbsp;|&nbsp; Time Management', body_style))
story.append(Paragraph('<b>Languages:</b> English, Tamil', body_style))

doc.build(story)

# Also copy to final
shutil.copyfile(pdf_path, r'd:\Navadharshini_portfolio\public\Nava_Dharshini_Resume_Final.pdf')

import pdfplumber
with pdfplumber.open(pdf_path) as p:
    print('SUCCESS! Total pages generated:', len(p.pages))
    for i, page in enumerate(p.pages):
        print(f'--- PAGE {i+1} ({page.width} x {page.height}) ---')
        print(page.extract_text()[:300])

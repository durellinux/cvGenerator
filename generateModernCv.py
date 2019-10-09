import os
import sys
from configobj import ConfigObj

def getFromConfObg(cobj, key):
	if key in cobj.keys():
		return cobj[key]
	else:
		return ""

def sortFileNames(files):
	nums = list()
	outfles = list()
	for f in files:
		nums.append(int(f.split("-")[0]))

	for n in reversed(sorted(nums)):
		start = str(n)+"-"
		for f in files:
			if f.find(start)==0:
				outfles.append(f)

	if len(outfles)!=len(files):
		print "Error in ordering files "+str(files)

	return outfles

def personalInformation(data, destination, language):
	print "Generating Personal Information Section"
	personal = ConfigObj(data+os.sep+"personal.dat")
	outfile = destination+os.sep+"personal.tex"
	f = open(outfile, "w")

	f.write("\\firstname{"+personal["FirstName"]+"}\n")
	f.write("\\familyname{"+personal["FamilyName"]+"}\n")
	f.write("\\address{"+personal["Address"]+"}{"+personal[language+"_City"]+"}\n")
	f.write("\email{"+personal["Mail"]+"}\n")
	f.write("\homepage{"+personal["Homepage"]+"}\n")

	f.close()

def education(data, destination, language):
	print "Generating Education Section"
	outfile = destination+os.sep+"education.tex"
	f = open(outfile, "w")

	valid = list()
	files = os.listdir(data+os.sep+"education")
	for fName in files:
		if ".dat" in fName:
			valid.append(fName)

	files = sortFileNames(valid)
	for fName in files:
		print "\t"+data+os.sep+"work"+os.sep+fName
		edu = ConfigObj(data+os.sep+"education"+os.sep+fName)

		date = getFromConfObg(edu, language+"_Date")
		degree = getFromConfObg(edu, language+"_Degree")
		institution = getFromConfObg(edu, language+"_Institution")
		role = getFromConfObg(edu, language+"_Role")
		thesis = getFromConfObg(edu, language+"_Thesis")
		grade = getFromConfObg(edu, language+"_Grade")

		thesisText = "Thesis" if language == "Eng" else "Tesi"

		f.write("\cventry{"+date+"}{"+degree+role+"}{"+institution+"}{"+grade+"}{}{}\n")
		if thesis!="":
			f.write("\cvitem{"+thesisText+"}{"+thesis+"}")
		f.write("\cvitem{}{}")

	f.close()

def work(data, destination, language):
	print "Generating Work Section"
	outfile = destination+os.sep+"work.tex"
	f = open(outfile, "w")

	valid = list()
	files = os.listdir(data+os.sep+"work")
	for fName in files:
		if ".dat" in fName:
			valid.append(fName)

	files = sortFileNames(valid)
	for fName in files:
		print "\t"+data+os.sep+"work"+os.sep+fName
		work = ConfigObj(data+os.sep+"work"+os.sep+fName)

		date = getFromConfObg(work, language+"_Date")
		role = getFromConfObg(work, language+"_Role")
		details = getFromConfObg(work, language+"_Details")
		employer = getFromConfObg(work, language+"_Employer")

		f.write("\cventry{"+date+"}{"+role+"}{"+details+"}{"+employer+"}{}{}\n")
		f.write("\cvitem{}{}")

	f.close()

def skills(data, destination, language):
	print "Generating Skills section"

	skills = ConfigObj(data+os.sep+"skills.dat")

	outfile = destination+os.sep+"languages.tex"
	f = open(outfile, "w")

	motherLanguage = skills["MotherTongue"]
	motherLanguageName = skills[motherLanguage][language+"_Name"]
	motherLanguageDesc = skills[language + "_MotherTongueDesc"]
	otherLanguages = getFromConfObg(skills, "OtherLanguages")

	f.write("\cventry{"+motherLanguageDesc+"}{"+motherLanguageName+"}{}{}{}{}\n")	

	for l in otherLanguages:
		lDesc = getFromConfObg(skills, l)
		name = lDesc[language+"_Name"]
		writing = lDesc["Writing"]
		reading = lDesc["Reading"]
		listening = lDesc["Listening"]
		speaking = lDesc["SpokenProduction"]
		interaction = lDesc["SpokenInteraction"]
		certification = getFromConfObg(lDesc, "Certification")

		if otherLanguages.index(l) == 0:
			first = "Others: "
		else:
			first = "~"

		if language == "Ita":
			f.write("\cventry{"+first+"}{"+name+"}{}{}{}{}\n")
			f.write("\cventry{~}{\\textnormal{Auto valutazione: Ascolto: "+listening+", Lettura: "+reading+", Produzione orale: "+speaking+", Interazione: "+interaction+", Scrittura: "+writing+"}}{}{}{}{}\n")
			if certification!="":
				f.write("\cventry{~}{\\textnormal{Certificazioni: "+certification+"}}{}{}{}{}\n")
		else:
			f.write("\cventry{" + first + "}{" + name + "}{}{}{}{}\n")
			f.write(
				"\cventry{~}{\\textnormal{Self evaluation: Listening: " + listening + ", Reading: " + reading + ", Speaking Production: " + speaking + ", Speaking Interaction: " + interaction + ", Writing: " + writing + "}}{}{}{}{}\n")
			if certification != "":
				f.write("\cventry{~}{\\textnormal{Certification: " + certification + "}}{}{}{}{}\n")

	f.close()

	outfile = destination+os.sep+"skills.tex"
	f = open(outfile, "w")

	skillList = getFromConfObg(skills, "Skills")
	print skillList
	for s in skillList:
		sBlock = getFromConfObg(skills, s);
		sName = getFromConfObg(sBlock, language+"_Name")
		sDesc = getFromConfObg(sBlock, language+"_Description")
		f.write("\cventry{~}{"+sName+": \\textnormal{"+sDesc+"}}{}{}{}{}\n")

	f.close()

	outfile = destination+os.sep+"interests.tex"
	f = open(outfile, "w")

	interests = getFromConfObg(skills, language+"_Interests")

	interests = ", ".join(interests)
	f.write("\cvitem{~}{"+interests+"}\n")

	f.close()

def selectedPublications(data, destination, language):
	print "Generating Publication section"

	f = open(data+os.sep+"publications.dat")
	pubList = f.readlines()
	f.close()

	selected = list()
	for p in pubList:
		if "#" in p:
			continue
		cite = p.strip().split("\t")[1]
		selected.append(cite)

	selected = ", ".join(selected)

	outfile = destination+os.sep+"selectedPublications.tex"
	f = open(outfile, "w")

	f.write("\\nocite{"+selected+"}\n")

	f.close()

supportedLanguages = ["Eng", "Ita"]

if len(sys.argv)<5:
	print "Usage: generateEuroPass.py template_folder data_folder destination_folder language [-force_remove]"
	print "\tLanguages: "+str(supportedLanguages)
	sys.exit(0)

template = sys.argv[1]
data = sys.argv[2]
destination = sys.argv[3]
language = sys.argv[4]

if not os.path.exists(template):
	print "Template not found in "+str(template)
	sys.exit(0)

if not os.path.exists(data):
	print "Data not found in " + str(data)
	sys.exit(0)

if os.path.exists(destination):
	if len(sys.argv)==6 and sys.argv[5]=="-force_remove":
		os.system("rm -rf "+destination+os.sep+"*")		
	else:
		print "Destination exists... please remove it, choose a new one, or execute with -force_remove parameter to override its content"
		sys.exit(0)
else:
	os.system("mkdir -p "+destination)


if language not in supportedLanguages:
	print "Language not supported... choose from: "+str(supportedLanguages)
	sys.exit(0)


# Copying Template
os.system("cp -R " + template + "/* " + destination + "/")

# Copying bib file
os.system("cp " + data + "/publications.bib " + destination + "/")

# Writing personal information section
personalInformation(data, destination, language)
education(data, destination, language)
work(data, destination, language)
skills(data, destination, language)
selectedPublications(data, destination, language)



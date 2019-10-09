#	Makefile to compile the paper
#	"make all" or "make"	create the jetta2012.pdf file.
#	"make clean" removes all the auxiliary files.

NAME = template
SIZE = letter

all:
	rm -f *.aux *.bbl *.blg  *.dvi $(NAME).pdf $(NAME).ps
	pdflatex	$(NAME).tex
	bibtex $(NAME)
	pdflatex	$(NAME).tex
	pdflatex	$(NAME).tex
#	open 		$(NAME).pdf

clean:
	rm -f *.aux *.bbl *.blg *.dvi *.log *~ *.backup $(NAME).ps $(NAME).pdf *.loa *.lot *.lof *.out *.toc

backup:
	tar cvf $(DATA)-$(ACRONYM).tar *
	gzip $(DATA)-$(ACRONYM).tar

CR:
	rm -f *.aux *.bbl *.blg  *.dvi $(NAME).pdf $(NAME).ps
	pdflatex        $(NAME).tex
	bibtex $(NAME)
	pdflatex        $(NAME).tex
	pdflatex        $(NAME).tex
	gs -dSAFER -dNOPLATFONTS -dNOPAUSE -dBATCH -sDEVICE=pdfwrite -sPAPERSIZE=$(SIZE) -dCompatibilityLevel=1.4 -dPDFSETTINGS=/printer -dCompatibilityLevel=1.4 -dMaxSubsetPct=100 -dSubsetFonts=true -dEmbedAllFonts=true -sOutputFile=CR.pdf -f $(NAME).pdf

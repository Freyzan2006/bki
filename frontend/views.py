from django.shortcuts import render

from django.views.generic import TemplateView

# class PharmacologyRUView(TemplateView):
#     template_name = "ru/Laboratories/PharmacologyRU.html"
    
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context["list_GUI_left"] = {
#             "Химия белков и пептидов": "Chemistry_of_proteins_and_peptidesRU",
#             "Биологически активные макромолекулярные системы": "BiolActivRU",
#             "Химия ферментов": "#!",
#             "Цитопротекторы растений": "#!",
#             "Низкомолекулярные биологически активные соединения": "#!",
#             "Комплексные соединения": "#!",
#             "Экспериментально-технологическая": "ExperTechnolRU",
#             "Фармакология и скрининг биологически активных веществ": "PharmacologyRU",
#             "Клеточные технологии овощных и растительных культур": "KletkaTechRU",
#             "Разработка природных лекарственных препаратов на основе биополимеров": "DevelopmentPermitRU"
#         }
#         context["language"] = {
#             "O'zb": "/Pharmacology",
#             "Рус": "/RU/PharmacologyRU",
#             "Eng": "/EN/PharmacologyEN"
#         }
#         context["LEVE_LB"] = True
#         return context





from django.shortcuts import render
from news.models import ArticlesModelUZ, ArticlesModelRU, ArticlesModelEN

def index(request):
    news = ArticlesModelUZ.objects.order_by('-data')[:4]

    language = {
        "O'zb": "/",
        "Рус": "/ru",
        "Eng": "/en"
    }

    return render(request, "uz/indexUZ.html", {"news": news, "language": language})

def indexRu(request):
    news = ArticlesModelRU.objects.order_by('-data')[:4]
    
    language = {
        "O'zb": "/",
        "Рус": "/ru",
        "Eng": "/en"
    }
    
    return render(request, "ru/indexRU.html", {"news": news, "language": language})
    
def indexEn(request):
    news = ArticlesModelEN.objects.order_by('-data')[:4]

    language = {
        "O'zb": "/",
        "Рус": "/ru",
        "Eng": "/en"
    }
    
    return render(request, "en/indexEN.html", {"news": news, "language": language})




def History(request):
    list_GUI_left = {
        "History of the Institute": "History",
        "Direktorlar": "Directors",
    }

    language = {
        "O'zb": "/uz/History",
        "Рус": "/ru/HistoryRU",
        "Eng": "/en/HistoryEN"
    }

    

    return render(request, "History/History/History.html", {"list_GUI_left": list_GUI_left, "language": language})

def HistoryRU(request):
    list_GUI_left = {
        "История Института": "HistoryRU",
        "Директора": "DirectorsRU",
    }

    language = {
        "O'zb": "/History",
        "Рус": "/RU/HistoryRU",
        "Eng": "/EN/HistoryEN"
    }

    return render(request, "History/History/HistoryRU.html", {"list_GUI_left": list_GUI_left, "language": language})

def HistoryEN(request):
    list_GUI_left = {
        "History of the Institute": "HistoryEN",
        "Directors": "DirectorsEN",
    }

    language = {
        "O'zb": "/History",
        "Рус": "/RU/HistoryRU",
        "Eng": "/EN/HistoryEN"
    }

    return render(request, "History/History/HistoryEN.html", {"list_GUI_left": list_GUI_left, "language": language})




def Directors(request):
    list_GUI_left = {
        "History of the Institute": "History",
        "Direktorlar": "Directors",
    }

    language = {
        "O'zb": "/Directors",
        "Рус": "/RU/DirectorsRU",
        "Eng": "/EN/DirectorsEN"
    }

    return render(request, "History/Directors/Directors.html", {"list_GUI_left": list_GUI_left, "language": language})

def DirectorsRU(request):
    list_GUI_left = {
        "История Института": "HistoryRU",
        "Директора": "DirectorsRU",
    }

    language = {
        "O'zb": "/Directors",
        "Рус": "/RU/DirectorsRU",
        "Eng": "/EN/DirectorsEN"
    }

    return render(request, "History/Directors/DirectorsRU.html", {"list_GUI_left": list_GUI_left, "language": language})

def DirectorsEN(request):
    list_GUI_left = {
        "History of the Institute": "HistoryEN",
        "Directors": "DirectorsEN",
    }

    language = {
        "O'zb": "/Directors",
        "Рус": "/RU/DirectorsRU",
        "Eng": "/EN/DirectorsEN"
    }
    
    return render(request, "History/Directors/DirectorsEN.html", {"list_GUI_left": list_GUI_left, "language": language})



def Management(request):

    language = {
        "O'zb": "/Management",
        "Рус": "/RU/ManagementRU",
        "Eng": "/EN/ManagementEN"
    }
    
    return render(request, "Management/Management.html", {"language": language})

def ManagementRU(request):

    language = {
        "O'zb": "/Management",
        "Рус": "/RU/ManagementRU",
        "Eng": "/EN/ManagementEN"
    }
    
    return render(request, "Management/ManagementRU.html", {"language": language})

def ManagementEN(request):

    language = {
        "O'zb": "/Management",
        "Рус": "/RU/ManagementRU",
        "Eng": "/EN/ManagementEN"
    }
    
    return render(request, "Management/ManagementEN.html", {"language": language})



def SciDirection(request):
    language = {
        "O'zb": "/SciDirection",
        "Рус": "/RU/SciDirectionRU",
        "Eng": "/EN/SciDirectionEN"
    }

    return render(request, "SciDirection/SciDirection.html", {"language": language})

def SciDirectionRU(request):
    language = {
        "O'zb": "/SciDirection",
        "Рус": "/RU/SciDirectionRU",
        "Eng": "/EN/SciDirectionEN"
    }

    return render(request, "SciDirection/SciDirectionRU.html", {"language": language})

def SciDirectionEN(request):
    language = {
        "O'zb": "/SciDirection",
        "Рус": "/RU/SciDirectionRU",
        "Eng": "/EN/SciDirectionEN"
    }

    return render(request, "SciDirection/SciDirectionEN.html", {"language": language})



def Chemistry_of_proteins_and_peptides(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptides",
        "Biologik faol makromolekulyar tizimlar": "BiolActiv",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnol",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "Pharmacology",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTech",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermit"
    }

    language = {
        "O'zb": "/Chemistry_of_proteins_and_peptides",
        "Рус": "/RU/Chemistry_of_proteins_and_peptidesRU",
        "Eng": "/EN/Chemistry_of_proteins_and_peptidesEN"
    }

    LEVE_LB = True

    return render(request, "Laboratories/Chemistry_of_proteins_and_peptides/Chemistry_of_proteins_and_eptidesEN.html", {"list_GUI_left": list_GUI_left, "LEVE_LB": LEVE_LB, "language": language})


def Chemistry_of_proteins_and_peptidesRU(request):
    list_GUI_left = {
        "Химия белков и пептидов": "Chemistry_of_proteins_and_peptidesRU",
        "Биологически активные макромолекулярные системы": "BiolActivRU",
        "Химия ферментов": "#!",
        "Цитопротекторы растений": "#!",
        "Низкомолекулярные биологически активные соединения": "#!",
        "Комплексные соединения": "#!",
        "Экспериментально-технологическая": "ExperTechnolRU",
        "Фармакология и скрининг биологически активных веществ": "PharmacologyRU",
        "Клеточные технологии овощных и растительных культур": "KletkaTechRU",
        "Разработка природных лекарственных препаратов на основе биополимеров": "DevelopmentPermitRU"
    }

    language = {
        "O'zb": "/Chemistry_of_proteins_and_peptides",
        "Рус": "/RU/Chemistry_of_proteins_and_peptidesRU",
        "Eng": "/EN/Chemistry_of_proteins_and_peptidesEN"
    }

    LEVE_LB = True

    return render(request, "Laboratories/Chemistry_of_proteins_and_peptides/Chemistry_of_proteins_and_eptidesRU.html", {"list_GUI_left": list_GUI_left, "LEVE_LB": LEVE_LB, "language": language})

def Chemistry_of_proteins_and_peptidesEN(request):
    list_GUI_left = {
        "Chemistry of proteins and peptides": "Chemistry_of_proteins_and_peptidesEN",
        "Biologically active macromolecular systems": "BiolActivEN",
        "Enzyme chemistry": "#!",
        "Plant cytoprotectors": "#!",
        "Low molecular weight biologically active compounds": "#!",
        "Complex connections": "#!",
        "Experimental and technological": "ExperTechnolEN",
        "Pharmacology and screening of biologically active substances": "PharmacologyEN",
        "Cellular technologies of vegetable and plant crops": "KletkaTechEN",
        "Development of natural medicines based on biopolymers": "DevelopmentPermitEN"
    }

    language = {
        "O'zb": "/Chemistry_of_proteins_and_peptides",
        "Рус": "/RU/Chemistry_of_proteins_and_peptidesRU",
        "Eng": "/EN/Chemistry_of_proteins_and_peptidesEN"
    }

    LEVE_LB = True

    return render(request, "Laboratories/Chemistry_of_proteins_and_peptides/Chemistry_of_proteins_and_eptidesEN.html", {"list_GUI_left": list_GUI_left, "LEVE_LB": LEVE_LB, "language": language})


def BiolActiv(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptides",
        "Biologik faol makromolekulyar tizimlar": "BiolActiv",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnol",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "Pharmacology",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTech",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermit"
    }

    language = {
        "O'zb": "/BiolActiv",
        "Рус": "/RU/BiolActivRU",
        "Eng": "/EN/BiolActivEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/BiolActiv/BiolActiv.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def BiolActivRU(request):
    list_GUI_left = {
        "Химия белков и пептидов": "Chemistry_of_proteins_and_peptidesRU",
        "Биологически активные макромолекулярные системы": "BiolActivRU",
        "Химия ферментов": "#!",
        "Цитопротекторы растений": "#!",
        "Низкомолекулярные биологически активные соединения": "#!",
        "Комплексные соединения": "#!",
        "Экспериментально-технологическая": "ExperTechnolRU",
        "Фармакология и скрининг биологически активных веществ": "PharmacologyRU",
        "Клеточные технологии овощных и растительных культур": "KletkaTechRU",
        "Разработка природных лекарственных препаратов на основе биополимеров": "DevelopmentPermitRU"
    }

    language = {
        "O'zb": "/BiolActiv",
        "Рус": "/RU/BiolActivRU",
        "Eng": "/EN/BiolActivEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/BiolActiv/BiolActivRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def BiolActivEN(request):
    list_GUI_left = {
        "Chemistry of proteins and peptides": "Chemistry_of_proteins_and_peptidesEN",
        "Biologically active macromolecular systems": "BiolActivEN",
        "Enzyme chemistry": "#!",
        "Plant cytoprotectors": "#!",
        "Low molecular weight biologically active compounds": "#!",
        "Complex connections": "#!",
        "Experimental and technological": "ExperTechnolEN",
        "Pharmacology and screening of biologically active substances": "PharmacologyEN",
        "Cellular technologies of vegetable and plant crops": "KletkaTechEN",
        "Development of natural medicines based on biopolymers": "DevelopmentPermitEN"
    }

    language = {
        "O'zb": "/BiolActiv",
        "Рус": "/RU/BiolActivRU",
        "Eng": "/EN/BiolActivEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/BiolActiv/BiolActivEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def ExperTechnol(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptides",
        "Biologik faol makromolekulyar tizimlar": "BiolActiv",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnol",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "Pharmacology",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTech",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermit"
    }

    language = {
        "O'zb": "/ExperTechnol",
        "Рус": "/RU/ExperTechnolRU",
        "Eng": "/EN/ExperTechnolEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/ExperTechnol/ExperTechnol.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def ExperTechnolRU(request):
    list_GUI_left = {
        "Химия белков и пептидов": "Chemistry_of_proteins_and_peptidesRU",
        "Биологически активные макромолекулярные системы": "BiolActivRU",
        "Химия ферментов": "#!",
        "Цитопротекторы растений": "#!",
        "Низкомолекулярные биологически активные соединения": "#!",
        "Комплексные соединения": "#!",
        "Экспериментально-технологическая": "ExperTechnolRU",
        "Фармакология и скрининг биологически активных веществ": "PharmacologyRU",
        "Клеточные технологии овощных и растительных культур": "KletkaTechRU",
        "Разработка природных лекарственных препаратов на основе биополимеров": "DevelopmentPermitRU"
    }

    language = {
        "O'zb": "/ExperTechnol",
        "Рус": "/RU/ExperTechnolRU",
        "Eng": "/EN/ExperTechnolEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/ExperTechnol/ExperTechnolRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def ExperTechnolEN(request):
    list_GUI_left = {
        "Chemistry of proteins and peptides": "Chemistry_of_proteins_and_peptidesEN",
        "Biologically active macromolecular systems": "BiolActivEN",
        "Enzyme chemistry": "#!",
        "Plant cytoprotectors": "#!",
        "Low molecular weight biologically active compounds": "#!",
        "Complex connections": "#!",
        "Experimental and technological": "ExperTechnolEN",
        "Pharmacology and screening of biologically active substances": "PharmacologyEN",
        "Cellular technologies of vegetable and plant crops": "KletkaTechEN",
        "Development of natural medicines based on biopolymers": "DevelopmentPermitEN"
    }

    language = {
        "O'zb": "/ExperTechnol",
        "Рус": "/RU/ExperTechnolRU",
        "Eng": "/EN/ExperTechnolEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/ExperTechnol/ExperTechnolEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})



def Pharmacology(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptides",
        "Biologik faol makromolekulyar tizimlar": "BiolActiv",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnol",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "Pharmacology",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTech",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermit"
    }

    language = {
        "O'zb": "/Pharmacology",
        "Рус": "/RU/PharmacologyRU",
        "Eng": "/EN/PharmacologyEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/Pharmacology/Pharmacology.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def PharmacologyRU(request):
    list_GUI_left = {
        "Химия белков и пептидов": "Chemistry_of_proteins_and_peptidesRU",
        "Биологически активные макромолекулярные системы": "BiolActivRU",
        "Химия ферментов": "#!",
        "Цитопротекторы растений": "#!",
        "Низкомолекулярные биологически активные соединения": "#!",
        "Комплексные соединения": "#!",
        "Экспериментально-технологическая": "ExperTechnolRU",
        "Фармакология и скрининг биологически активных веществ": "PharmacologyRU",
        "Клеточные технологии овощных и растительных культур": "KletkaTechRU",
        "Разработка природных лекарственных препаратов на основе биополимеров": "DevelopmentPermitRU"
    }

    language = {
        "O'zb": "/Pharmacology",
        "Рус": "/RU/PharmacologyRU",
        "Eng": "/EN/PharmacologyEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/Pharmacology/PharmacologyRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})


def PharmacologyEN(request):
    list_GUI_left = {
        "Chemistry of proteins and peptides": "Chemistry_of_proteins_and_peptidesEN",
        "Biologically active macromolecular systems": "BiolActivEN",
        "Enzyme chemistry": "#!",
        "Plant cytoprotectors": "#!",
        "Low molecular weight biologically active compounds": "#!",
        "Complex connections": "#!",
        "Experimental and technological": "ExperTechnolEN",
        "Pharmacology and screening of biologically active substances": "PharmacologyEN",
        "Cellular technologies of vegetable and plant crops": "KletkaTechEN",
        "Development of natural medicines based on biopolymers": "DevelopmentPermitEN"
    }

    language = {
        "O'zb": "/Pharmacology",
        "Рус": "/RU/PharmacologyRU",
        "Eng": "/EN/PharmacologyEN"
    }
    
    LEVE_LB = True
    return render(request, "Laboratories/Pharmacology/PharmacologyEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})



def KletkaTech(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptides",
        "Biologik faol makromolekulyar tizimlar": "BiolActiv",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnol",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "Pharmacology",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTech",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermit"
    }

    language = {
        "O'zb": "/KletkaTech",
        "Рус": "/RU/KletkaTechRU",
        "Eng": "/EN/KletkaTechEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/KletkaTech/KletkaTech.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def KletkaTechRU(request):
    list_GUI_left = {
        "Химия белков и пептидов": "Chemistry_of_proteins_and_peptidesRU",
        "Биологически активные макромолекулярные системы": "BiolActivRU",
        "Химия ферментов": "#!",
        "Цитопротекторы растений": "#!",
        "Низкомолекулярные биологически активные соединения": "#!",
        "Комплексные соединения": "#!",
        "Экспериментально-технологическая": "ExperTechnolRU",
        "Фармакология и скрининг биологически активных веществ": "PharmacologyRU",
        "Клеточные технологии овощных и растительных культур": "KletkaTechRU",
        "Разработка природных лекарственных препаратов на основе биополимеров": "DevelopmentPermitRU"
    }

    language = {
        "O'zb": "/KletkaTech",
        "Рус": "/RU/KletkaTechRU",
        "Eng": "/EN/KletkaTechEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/KletkaTech/KletkaTechRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def KletkaTechEN(request):
    list_GUI_left = {
        "Chemistry of proteins and peptides": "Chemistry_of_proteins_and_peptidesEN",
        "Biologically active macromolecular systems": "BiolActivEN",
        "Enzyme chemistry": "#!",
        "Plant cytoprotectors": "#!",
        "Low molecular weight biologically active compounds": "#!",
        "Complex connections": "#!",
        "Experimental and technological": "ExperTechnolEN",
        "Pharmacology and screening of biologically active substances": "PharmacologyEN",
        "Cellular technologies of vegetable and plant crops": "KletkaTechEN",
        "Development of natural medicines based on biopolymers": "DevelopmentPermitEN"
    }

    language = {
        "O'zb": "/KletkaTech",
        "Рус": "/RU/KletkaTechRU",
        "Eng": "/EN/KletkaTechEN"
    }
    
    LEVE_LB = True
    return render(request, "Laboratories/KletkaTech/KletkaTechEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})



def DevelopmentPermit(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptides",
        "Biologik faol makromolekulyar tizimlar": "BiolActiv",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnol",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "Pharmacology",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTech",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermit"
    }

    language = {
        "O'zb": "/DevelopmentPermit",
        "Рус": "/RU/DevelopmentPermitRU",
        "Eng": "/EN/DevelopmentPermitEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/DevelopmentPermit/DevelopmentPermit.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def DevelopmentPermitRU(request):
    list_GUI_left = {
        "Химия белков и пептидов": "Chemistry_of_proteins_and_peptidesRU",
        "Биологически активные макромолекулярные системы": "BiolActivRU",
        "Химия ферментов": "#!",
        "Цитопротекторы растений": "#!",
        "Низкомолекулярные биологически активные соединения": "#!",
        "Комплексные соединения": "#!",
        "Экспериментально-технологическая": "ExperTechnolRU",
        "Фармакология и скрининг биологически активных веществ": "PharmacologyRU",
        "Клеточные технологии овощных и растительных культур": "KletkaTechRU",
        "Разработка природных лекарственных препаратов на основе биополимеров": "DevelopmentPermitRU"
    }

    language = {
        "O'zb": "/DevelopmentPermit",
        "Рус": "/RU/DevelopmentPermitRU",
        "Eng": "/EN/DevelopmentPermitEN"
    }

    LEVE_LB = True
    return render(request, "Laboratories/DevelopmentPermit/DevelopmentPermitRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def DevelopmentPermitEN(request):
    list_GUI_left = {
        "Chemistry of proteins and peptides": "Chemistry_of_proteins_and_peptidesEN",
        "Biologically active macromolecular systems": "BiolActivEN",
        "Enzyme chemistry": "#!",
        "Plant cytoprotectors": "#!",
        "Low molecular weight biologically active compounds": "#!",
        "Complex connections": "#!",
        "Experimental and technological": "ExperTechnolEN",
        "Pharmacology and screening of biologically active substances": "PharmacologyEN",
        "Cellular technologies of vegetable and plant crops": "KletkaTechEN",
        "Development of natural medicines based on biopolymers": "DevelopmentPermitEN"
    }

    language = {
        "O'zb": "/DevelopmentPermit",
        "Рус": "/RU/DevelopmentPermitRU",
        "Eng": "/EN/DevelopmentPermitEN"
    }
    
    LEVE_LB = True
    return render(request, "Laboratories/DevelopmentPermit/DevelopmentPermitEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})
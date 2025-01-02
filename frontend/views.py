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

    

    return render(request, "uz/HistoryUZ.html", {"list_GUI_left": list_GUI_left, "language": language})

def HistoryRU(request):
    list_GUI_left = {
        "История Института": "HistoryRU",
        "Директора": "DirectorsRU",
    }

    language = {
        "O'zb": "/uz/HistoryUZ",
        "Рус": "/ru/HistoryRU",
        "Eng": "/en/HistoryEN"
    }

    return render(request, "ru/HistoryRU.html", {"list_GUI_left": list_GUI_left, "language": language})

def HistoryEN(request):
    list_GUI_left = {
        "History of the Institute": "HistoryEN",
        "Directors": "DirectorsEN",
    }

    language = {
        "O'zb": "/uz/HistoryUZ",
        "Рус": "/ru/HistoryRU",
        "Eng": "/en/HistoryEN"
    }

    return render(request, "en/HistoryEN.html", {"list_GUI_left": list_GUI_left, "language": language})




def Directors(request):
    list_GUI_left = {
        "History of the Institute": "History",
        "Direktorlar": "Directors",
    }

    language = {
        "O'zb": "/uz/DirectorsUZ",
        "Рус": "/ru/DirectorsRU",
        "Eng": "/en/DirectorsEN"
    }

    return render(request, "uz/DirectorsUZ.html", {"list_GUI_left": list_GUI_left, "language": language})

def DirectorsRU(request):
    list_GUI_left = {
        "История Института": "HistoryRU",
        "Директора": "DirectorsRU",
    }

    language = {
        "O'zb": "/uz/DirectorsUZ",
        "Рус": "/ru/DirectorsRU",
        "Eng": "/en/DirectorsEN"
    }

    return render(request, "ru/DirectorsRU.html", {"list_GUI_left": list_GUI_left, "language": language})

def DirectorsEN(request):
    list_GUI_left = {
        "History of the Institute": "HistoryEN",
        "Directors": "DirectorsEN",
    }

    language = {
        "O'zb": "/uz/DirectorsUZ",
        "Рус": "/ru/DirectorsRU",
        "Eng": "/en/DirectorsEN"
    }
    
    return render(request, "en/DirectorsEN.html", {"list_GUI_left": list_GUI_left, "language": language})



def Management(request):

    language = {
        "O'zb": "/uz/ManagementUZ",
        "Рус": "/ru/ManagementRU",
        "Eng": "/en/ManagementEN"
    }
    
    return render(request, "uz/ManagementUZ.html", {"language": language})

def ManagementRU(request):

    language = {
        "O'zb": "/uz/ManagementUZ",
        "Рус": "/ru/ManagementRU",
        "Eng": "/en/ManagementEN"
    }
    
    return render(request, "ru/ManagementRU.html", {"language": language})

def ManagementEN(request):

    language = {
        "O'zb": "/uz/ManagementUZ",
        "Рус": "/ru/ManagementRU",
        "Eng": "/en/ManagementEN"
    }
    
    return render(request, "en/ManagementEN.html", {"language": language})



def SciDirection(request):
    language = {
        "O'zb": "/uz/SciDirectionUZ",
        "Рус": "/ru/SciDirectionRU",
        "Eng": "/en/SciDirectionEN"
    }

    return render(request, "uz/LaboratoriesTempl/SciDirectionUZ.html", {"language": language})

def SciDirectionRU(request):
    language = {
        "O'zb": "/uz/SciDirectionUZ",
        "Рус": "/ru/SciDirectionRU",
        "Eng": "/en/SciDirectionEN"
    }

    return render(request, "ru/LaboratoriesTempl/SciDirectionRU.html", {"language": language})

def SciDirectionEN(request):
    language = {
        "O'zb": "/uz/SciDirectionUZ",
        "Рус": "/ru/SciDirectionRU",
        "Eng": "/en/SciDirectionEN"
    }

    return render(request, "en/LaboratoriesTempl/SciDirectionEN.html", {"language": language})



def Chemistry_of_proteins_and_peptides(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptidesUZ",
        "Biologik faol makromolekulyar tizimlar": "BiolActivUZ",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnolUZ",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "PharmacologyUZ",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTechUZ",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermitUZ"
    }

    language = {
        "O'zb": "/uz/Chemistry_of_proteins_and_peptidesUZ",
        "Рус": "/ru/Chemistry_of_proteins_and_peptidesRU",
        "Eng": "/en/Chemistry_of_proteins_and_peptidesEN"
    }

    LEVE_LB = True

    return render(request, "uz/LaboratoriesTempl/ChemistryOfProteinsAndEptidesUZ.html", {"list_GUI_left": list_GUI_left, "LEVE_LB": LEVE_LB, "language": language})


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
        "O'zb": "/uz/Chemistry_of_proteins_and_peptidesUZ",
        "Рус": "/ru/Chemistry_of_proteins_and_peptidesRU",
        "Eng": "/en/Chemistry_of_proteins_and_peptidesEN"
    }

    LEVE_LB = True

    return render(request, "ru/LaboratoriesTempl/ChemistryOfProteinsAndEptidesRU.html", {"list_GUI_left": list_GUI_left, "LEVE_LB": LEVE_LB, "language": language})

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
        "O'zb": "/uz/Chemistry_of_proteins_and_peptidesUZ",
        "Рус": "/ru/Chemistry_of_proteins_and_peptidesRU",
        "Eng": "/en/Chemistry_of_proteins_and_peptidesEN"
    }

    LEVE_LB = True

    return render(request, "en/LaboratoriesTempl/ChemistryOfProteinsAndEptidesEN.html", {"list_GUI_left": list_GUI_left, "LEVE_LB": LEVE_LB, "language": language})


def BiolActiv(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptidesUZ",
        "Biologik faol makromolekulyar tizimlar": "BiolActivUZ",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnolUZ",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "PharmacologyUZ",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTechUZ",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermitUZ"
    }

    language = {
        "O'zb": "/uz/BiolActivUZ",
        "Рус": "/RU/BiolActivRU",
        "Eng": "/EN/BiolActivEN"
    }

    LEVE_LB = True
    return render(request, "uz/LaboratoriesTempl/BiolActivUZ.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/BiolActivUZ",
        "Рус": "/ru/BiolActivRU",
        "Eng": "/en/BiolActivEN"
    }

    LEVE_LB = True
    return render(request, "ru/LaboratoriesTempl/BiolActivRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/BiolActivUZ",
        "Рус": "/ru/BiolActivRU",
        "Eng": "/en/BiolActivEN"
    }

    LEVE_LB = True
    return render(request, "en/LaboratoriesTempl/BiolActivEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

def ExperTechnol(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptidesUZ",
        "Biologik faol makromolekulyar tizimlar": "BiolActivUZ",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnolUZ",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "PharmacologyUZ",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTechUZ",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermitUZ"
    }

    language = {
        "O'zb": "/uz/ExperTechnolUZ",
        "Рус": "/ru/ExperTechnolRU",
        "Eng": "/en/ExperTechnolEN"
    }

    LEVE_LB = True
    return render(request, "uz/LaboratoriesTempl/ExperTechnol.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/ExperTechnolUZ",
        "Рус": "/ru/ExperTechnolRU",
        "Eng": "/en/ExperTechnolEN"
    }
    
    LEVE_LB = True
    return render(request, "ru/LaboratoriesTempl/ExperTechnolRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/ExperTechnolUZ",
        "Рус": "/ru/ExperTechnolRU",
        "Eng": "/en/ExperTechnolEN"
    }

    LEVE_LB = True
    return render(request, "en/LaboratoriesTempl/ExperTechnolEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})



def Pharmacology(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptidesUZ",
        "Biologik faol makromolekulyar tizimlar": "BiolActivUZ",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnolUZ",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "PharmacologyUZ",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTechUZ",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermitUZ"
    }

    language = {
        "O'zb": "/uz/PharmacologyUZ",
        "Рус": "/ru/PharmacologyRU",
        "Eng": "/en/PharmacologyEN"
    }

    LEVE_LB = True
    return render(request, "uz/LaboratoriesTempl/PharmacologyUZ.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/PharmacologyUZ",
        "Рус": "/ru/PharmacologyRU",
        "Eng": "/en/PharmacologyEN"
    }

    LEVE_LB = True
    return render(request, "ru/LaboratoriesTempl/PharmacologyRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})


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
        "O'zb": "/uz/PharmacologyUZ",
        "Рус": "/ru/PharmacologyRU",
        "Eng": "/en/PharmacologyEN"
    }
    
    LEVE_LB = True
    return render(request, "en/LaboratoriesTempl/PharmacologyEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})



def KletkaTech(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptidesUZ",
        "Biologik faol makromolekulyar tizimlar": "BiolActivUZ",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnolUZ",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "PharmacologyUZ",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTechUZ",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermitUZ"
    }

    language = {
        "O'zb": "/uz/KletkaTechUZ",
        "Рус": "/ru/KletkaTechRU",
        "Eng": "/en/KletkaTechEN"
    }

    LEVE_LB = True
    return render(request, "uz/LaboratoriesTempl/KletkaTechUZ.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/KletkaTechUZ",
        "Рус": "/ru/KletkaTechRU",
        "Eng": "/en/KletkaTechEN"
    }

    LEVE_LB = True
    return render(request, "ru/LaboratoriesTempl/KletkaTechRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/KletkaTechUZ",
        "Рус": "/ru/KletkaTechRU",
        "Eng": "/en/KletkaTechEN"
    }
    
    LEVE_LB = True
    return render(request, "en/LaboratoriesTempl/KletkaTechEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})



def DevelopmentPermit(request):
    list_GUI_left = {
        "Oqsillar va peptidlar kimyosi": "Chemistry_of_proteins_and_peptidesUZ",
        "Biologik faol makromolekulyar tizimlar": "BiolActivUZ",
        "Fermentlar kimyosi": "#!",
        "O'simliklar sitoprotektorlari": "#!",
        "Past molekulyar og'irlikdagi biologik faol birikmalar": "#!",
        "Murakkab ulanishlar": "#!",
        "Eksperimental va texnologik": "ExperTechnolUZ",
        "Biologik faol moddalarning farmakologiyasi va skriningi": "PharmacologyUZ",
        "Sabzavot va o'simlik ekinlarining uyali texnologiyalari": "KletkaTechUZ",
        "Biopolimerlar asosida tabiiy dori vositalarini ishlab chiqish": "DevelopmentPermitUZ"
    }

    language = {
        "O'zb": "/uz/DevelopmentPermitUZ",
        "Рус": "/ru/DevelopmentPermitRU",
        "Eng": "/en/DevelopmentPermitEN"
    }

    LEVE_LB = True
    return render(request, "uz/LaboratoriesTempl/DevelopmentPermit.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/DevelopmentPermitUZ",
        "Рус": "/rn/DevelopmentPermitRU",
        "Eng": "/en/DevelopmentPermitEN"
    }

    LEVE_LB = True
    return render(request, "ru/LaboratoriesTempl/DevelopmentPermitRU.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})

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
        "O'zb": "/uz/DevelopmentPermit",
        "Рус": "/ru/DevelopmentPermitRU",
        "Eng": "/en/DevelopmentPermitEN"
    }
    
    LEVE_LB = True
    return render(request, "en/LaboratoriesTempl/DevelopmentPermitEN.html", {"LEVE_LB": LEVE_LB, "list_GUI_left": list_GUI_left, "language": language})
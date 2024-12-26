
import frontend.views as views 
from django.urls import path 

urlpatterns = [
    path('', views.index, name = 'home'),
    path('ru/', views.indexRu, name = "homeRu"),
    path('en/', views.indexEn, name = "homeEn"),

    path('uz/History', views.History, name = "History"),
    path('ru/HistoryRU', views.HistoryRU, name = "HistoryRU"),
    path('en/HistoryEN', views.HistoryEN, name = "HistoryEN"),
    
    path('uz/Directors', views.Directors, name = "Directors"),
    path('ru/DirectorsRU', views.DirectorsRU, name = "DirectorsRU"),
    path('en/DirectorsEN', views.DirectorsEN, name = "DirectorsEN"),
    
    path('uz/Management', views.Management, name = "Management"),
    path('ru/ManagementRU', views.ManagementRU, name = "ManagementRU"),
    path('en/ManagementEN', views.ManagementEN, name = "ManagementEN"),

    path('uz/SciDirection', views.SciDirection, name = "SciDirection"),
    path('ru/SciDirectionRU', views.SciDirectionRU, name = "SciDirectionRU"),
    path('en/SciDirectionEN', views.SciDirectionEN, name = "SciDirectionEN"),

    path('uz/Chemistry_of_proteins_and_peptides', views.Chemistry_of_proteins_and_peptides, name = "Chemistry_of_proteins_and_peptides"),
    path('ru/Chemistry_of_proteins_and_peptidesRU', views.Chemistry_of_proteins_and_peptidesRU, name = "Chemistry_of_proteins_and_peptidesRU"),
    path('en/Chemistry_of_proteins_and_peptidesEN', views.Chemistry_of_proteins_and_peptidesEN, name = "Chemistry_of_proteins_and_peptidesEN"),

    path('uz/BiolActiv', views.BiolActiv, name = "BiolActiv"),
    path('ru/BiolActivRU', views.BiolActivRU, name = "BiolActivRU"),
    path('en/BiolActivEN', views.BiolActivEN, name = "BiolActivEN"),

    path('uz/ExperTechnol', views.ExperTechnol, name = "ExperTechnol"),
    path('ru/ExperTechnolRU', views.ExperTechnolRU, name = "ExperTechnolRU"),
    path('en/ExperTechnolEN', views.ExperTechnolEN, name = "ExperTechnolEN"),
    
    path('uz/Pharmacology', views.Pharmacology, name = "Pharmacology"),
    path('ru/PharmacologyRU', views.PharmacologyRU, name = "PharmacologyRU"),
    path('en/PharmacologyEN', views.PharmacologyEN, name = "PharmacologyEN"),

    path('uz/KletkaTech', views.KletkaTech, name = "KletkaTech"),
    path('ru/KletkaTechRU', views.KletkaTechRU, name = "KletkaTechRU"),
    path('en/KletkaTechEN', views.KletkaTechEN, name = "KletkaTechEN"),

    path('uz/DevelopmentPermit', views.DevelopmentPermit, name = "DevelopmentPermit"),
    path('ru/DevelopmentPermitRU', views.DevelopmentPermitRU, name = "DevelopmentPermitRU"),
    path('en/DevelopmentPermitEN', views.DevelopmentPermitEN, name = "DevelopmentPermitEN")
]
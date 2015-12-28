//TODO: make it dynamic
export const lang = (sessionStorage && sessionStorage.lang) || navigatorLanguage()


/**
 * Returns one of supported language, default if not.
 * Supported languages: 'nl', 'fr', 'en' (default).
 * @returns {string}
 */
export function navigatorLanguage () {
  let locale = (window.navigator.userLanguage || window.navigator.language)
  locale = /..-../.test(locale) ? locale.split('-')[0] : locale.split('_')[0]
  if ((locale !== 'en') && (locale !== 'fr') && (locale !== 'nl') ) locale = 'en'
  return locale
}

export const i18n = {
  filters: {
    reload: {
      fr:'Rafraîchir',
      nl: 'Opnieuw laden',
      en: 'Reload',
    },
    search: {
      fr: 'Recherche...',
      nl: 'Zoeken...',
      en: 'Search...',
    },
    dateTo: {
      fr: 'à',
      nl: 'tot',
      en: 'to',
    },
    dateBegin: {
      fr: 'Date début',
      nl: 'Begindatum',
      en: 'Start Date',
    },
    dateEnd: {
      fr: 'Date fin',
      nl: 'Einddatum',
      en: 'End Date',
    },
    colVisible : {
      fr: 'Afficher Colonnes',
      nl: 'Tonen',
      en: 'Show Column',
    }
  },
  login: {
    login: {
      fr: 'Nom d\'utilisateur',
      nl: 'Gebruikernaam',
      en: 'Username',
    },
    password: {
      fr: 'Mot de passe',
      nl: 'Password',
      en: 'Password',
    },
    submit: {
      fr: 'Envoyer',
      nl: 'Verzenden',
      en: 'Submit',
    },
  },
  menu:{
    all: {
      fr: 'Tous',
      nl: 'Alle',
      en: 'all',
    },
    others: {
      fr: 'Autres',
      nl: 'Anders',
      en: 'Others'
    }
  },
  uploader: {
    uploadBtn: {
      fr: 'Déposer des fichiers',
      nl: 'Bestanden uploaden naar Group S',
      en: 'Upload files on the server',
    }
  }
}

const old = {
  fr: {
    button:          {
      search:      'Recherche...',
      reload:      'Rafraîchir',
      colVisible:  'Afficher',
      multiDL:     'Télécharger les fichiers',
      multiDelete: 'Supprimer les fichiers',
      myContact:   'Mes contacts',
      close:       'Ferme',
      filter:      {
        filterby: 'Filtrer par',
        new:      'Nouveaux fichiers',
        notDL:    'Fichiers non téléchargés',
        clear:    'Retirer tous les filtres'
      },
      help:        'Aide',
      signout:     'Se Déconnecter',
      client:      'Entreprises',
      validation:  'Valider les fichiers',
      notify:      'Prevenir Client'
    },
    breadrumb:       'Tous les fichiers triés par "nouveaux" et "non téléchargés"',
    result:          'Résultat: ',
    url:             {
      table:      '../cdn/DataTables/1.10.4/resources/language/fr.json',
      datepicker: '../cdn/bootstrap/locale/bootstrap-datepicker.fr.js'
    },
    dirlist:         {
      PPP: 'Paie & Post-Paie',
      GES: 'Gestion des entrées & sorties',
      GAR: 'Gestion des arrêts',
      GAD: 'Gestion administative'
    },
    col:             {
      new:         'Nouveau',
      date:        'Date',
      name:        'Nom',
      user:        'Utilisateur',
      empl:        'Employeur',
      label:       'Libell&eacute;',
      refdoc:      'N° Doc',
      size:        'Taille',
      ext:         'Type',
      path:        'Chemin',
      refCl:       'Ref Client',
      count:       'Compteur',
      refGS:       'Ref',
      uploadStamp: 'Heure Dépôt',
      del:         'Effacer',
      comment:     'Commentaires'
    },
    tree:            {
      root:   'Boîte de réception',
      upload: 'Boîte de dépôts',
      valid:  'Fichiers à valider',
      other:  'Autres Documents'
    },
    sideMenu:        {
      config: 'Configuration de la Table',
      reset:  'Réinitialiser la vue'
    },
    file:            {
      add:      'Fichier(s) ajouté(s)',
      del:      'Fichier(s) supprimé(s)',
      dl:       'Vos documents sont en cours de téléchargement. \n\n Merci de patienter.',
      noselect: 'Aucun fichier sélectionné!',
      valid:    'Fichier(s) validé(s)'
    },
    datepicker:      {
      to:    'à',
      start: 'date début',
      end:   'date fin'
    },
    dialog:          {
      delAction:      'Suppression de fichier',
      delSure:        'Êtes-vous sûr de vouloir supprimer ce(s) fichier(s)? \n Cela peut prendre un certain temps',
      delConfirm:     'Supprimer',
      validAction:    'Validation de fichier',
      validSure:      'Êtes-vous sûr de vouloir mettre ce(s) fichier(s) à disposition du client?',
      validConfirm:   'Valider',
      signout:        'Déconnexion',
      signoutSure:    'Êtes-vous sûr de vouloir vous déconnecter?',
      signoutConfirm: 'Sortir',
      cancel:         'Annuler'
    },
    help:            {
      skipLabel:   'SORTIR',
      nextLabel:   'SUIVANT',
      prevLabel:   'PRECEDENT',
      doneLabel:   'FIN',
      welcome:     "Bienvenue dans Online Transfer. Vous venez d'activer l'aide qui vous guidera dans l'utilisation de l'application.",
      table:       'Voici le contenu de votre espace serveur.',
      checkbox:    'Activez les cases pour sélectionner plusieurs fichiers à télécharger.',
      dlfile:      "Cliquez sur cet icône pour télécharger un seul fichier. (Le nombre à  droite de l'icône est le compteur de vos téléchargements).",
      dlfileLabel: 'Cliquez sur ce lien pour voir le fichier.',
      remove:      'Supprimez vos fichiers téléchargés et libérez votre espace disque.',
      headers:     'La saisie des entêtes permet de trier (par colonne, par ordre alphabétique, croissant-décroissant). "SHIFT + clic" permet de cumuler plusieurs tris.',
      bottom:      "Choisissez le nombre d'éléments que vous voulez afficher.",
      upload:      'Activez ce bouton pour envoyer vos fichiers sur Online Transfer.',
      menu:        "Sélectionnez une catégorie de document ou un type de document pour filtrer l'affichage.",
      filterby:    'Sélectionnez vos nouveaux fichiers, vos fichiers non téléchargés uniquement ou choisissez de désactiver vos filtres.',
      searchBox:   "Faites vos recherches par mot-clé. Entrez un numéro d'employeur ou un libellé pour filtrer les fichiers.",
      datepicker:  'Définissez une période comme critère de filtre',
      reloadme:    'Cliquez sur ce bouton pour recharger la page et les données.',
      breadcrumb:  'Voici la liste des filtres par catégorie et numéro de document.',
      uploaded:    'Voir les fichiers chargés.',
      columnMenu:  'Afficher/cacher les colonnes de la table. ',
      logoff:      "Cliquez ici pour vous déconnecter de l'application."
    },
    warningQuota:    'Cette application est exclusivement destinée au transfert de fichier. Veillez à bien supprimer vos fichiers après le téléchargement.',
    listAll:         'Tous',
    showHide:        'Afficher les colonnes',
    upload:          'Déposer des fichiers',
    modalupload:     'Envoyer des fichiers',
    modalbq:         "Veillez à sélectionner votre dossier de destination avant d'ajouter vos fichiers.",
    modalbtn:        'Sélectionner les fichiers à envoyer',
    notification:    "Prévenir l'utilisateur par email",
    notificationCC:  'Prévenir votre cabinet comptable par email',
    notificationGMS: 'Prévenir le gestionnaire par email',
    noNotif:         "Pas de notification, l'utilisateur n'a pas été prévenu!",
    noNotifMail:     "Pas de notification, le destinataire n'a pas d'email défini!",
    errorValid:      "Erreur: tous les fichiers n'ont pas été validés!",
    errorCnx:        'Erreur de connection au serveur: Authentification nécessaire.',
    error0:          'Erreur: Problème lors de la récupération de la liste des fichiers sur le serveur. ',
    error5xx:        'Service temporairement indisponible, veuillez réessayer plus tard.',
    errorSession:    'Session expirée',
    myOwnAccount:    '(MON PROPRE COMPTE)',
    clientListEmpty: 'Erreur: Problème lors de la recuperation de la liste des clients.'
  },
  nl: {
    button:          {
      search:      'Zoeken...',
      reload:      'Opnieuw laden',
      colVisible:  'Tonen',
      multiDL:     'Bestanden downloaden',
      multiDelete: 'Bestanden verwijderen',
      myContact:   'Mijn contacten',
      close:       'Sluiten',
      filter:      {
        filterby: 'Filter door',
        new:      'Nieuwe bestanden',
        notDL:    'Niet gedownloade bestanden',
        clear:    'Filters verwijderen'
      },
      help:        'Help',
      signout:     'Uit Loggen',
      client:      'Bedrijven',
      validation:  'Bestanden valideren'
    },
    breadrumb:       'Alle bestanden, gesorteerd volgens "nieuw" en "niet gedownload"',
    result:          'Resultaten: ',
    url:             {
      table:      '../cdn/DataTables/1.10.4/resources/language/nl.json',
      datepicker: '../cdn/bootstrap/locale/bootstrap-datepicker.nl.js'
    },
    col:             {
      new:         'Nieuw',
      date:        'Datum',
      name:        'Naam',
      user:        'Gebruiker',
      empl:        'Werkgever',
      label:       'Label',
      refdoc:      'N° Doc',
      size:        'Grootte',
      ext:         'Type',
      path:        'Locatie',
      refCl:       'Ref. Klant',
      count:       'Teller',
      refGS:       'Ref. Group S',
      uploadStamp: 'Upload tijd',
      del:         'Verwijderen',
      comment:     'Opmerking'
    },
    tree:            {
      root:   'Inbox ',
      upload: 'Outbox',
      valid:  'Bestanden valideren',
      other:  'Andere bestanden'
    },
    sideMenu:        {
      config: 'Configuratie van de tabel',
      reset:  'Standaardconfiguratie herstellen'
    },
    file:            {
      add:      'Bestand(en) toegevoegd',
      del:      'Bestand(en) verwijderd',
      dl:       'Uw bestanden zijn aan het downloaden. \n\n Dank u voor uw geduld.',
      noselect: 'Geen bestand geselecteerd!.',
      valid:    'Bestand(en) gevalideerd'
    },
    datepicker:      {
      to:    'tot',
      start: 'Begindatum',
      end:   'Einddatum'
    },
    dialog:          {
      delAction:      'Bestanden verwijderen',
      delSure:        'Bent u zeker?',
      delConfirm:     'Verwijderen',
      signout:        'Uitloggen',
      validAction:    'Validation de fichier',
      validSure:      'Êtes-vous sûr de vouloir mettre ce(s) fichier(s) à disposition du client?',
      validConfirm:   'Valider',
      signoutSure:    'Bent u zeker?',
      signoutConfirm: 'Uitloggen',
      cancel:         'Annuleren'
    },
    help:            {
      skipLabel:   'UITLOGGEN',
      nextLabel:   'VOLGENDE',
      prevLabel:   'VORIGE',
      doneLabel:   'END',
      welcome:     'Welkom bij van Group S Transfer. Deze helpfunctie zal u begeleiden in het gebruik van deze applicatie. U kan ook de pijlen gebruiken als u wilt.',
      upload:      'Klik hier om de bestanden te verzenden naar Group S.',
      menu:        'Klik op een categorie en / of een documentnummer om bestanden te filteren.',
      filterby:    'Selecteer enkel de nieuwe, niet gedownloade bestanden of deactiveer de toegepaste filters.',
      searchBox:   'Zoekveld. Voer het nummer van een werknemer of benaming in om de bestanden te filteren.',
      datepicker:  'Klik op het veld om te filteren op datum.',
      reloadme:    'Klik op deze knop om de pagina te herladen.',
      table:       'Hier is de lijst van bestanden die u kunt downloaden',
      headers:     'Klik op de kop om de kolom te sorteren. Hou de SHIFT toets ingedrukt en klik op een andere kolom om op meerdere kolommen te sorteren.',
      bottom:      'Selecteer het aantal bestanden om te tonen.',
      breadcrumb:  'Hier is de lijst met toegepaste filters per categorie en het nummer van het document.',
      dlfile:      'Klik hier om het bestand te downloaden. Het nummer geeft aan hoe vaak het bestand is gedownload.',
      dlfileLabel: 'Klik op de link om het bestand te downloaden.',
      checkbox:    'Klik op de selectievakjes om bestanden te selecteren.',
      uploaded:    'Klik hier om de verzonden bestanden te zien.',
      logoff:      'Kilk hier om de applicatie te sluiten.',
      columnMenu:  'Tonen kolommen van het table. ',
      remove:      'Klik op het  icoon om het bestand te verwijderen.'
    },
    warningQuota:    ' Deze toepassing is voorzien voor de overdracht van bestanden. Gelieve regelmatig de bestanden te verwijderen.',
    listAll:         'Alle',
    showHide:        'Kolommen tonen',
    upload:          'Bestanden uploaden naar Group S',
    modalupload:     'Bestanden uploaden naar Group S',
    modalbq:         'Gelieve de doelmap te selecteren alvorens uw bestanden toe te voegen.',
    modalbtn:        'Selecteer de bestanden om toe te voegen',
    notification:    'Bericht de gebruiker door email',
    noNotif:         'Geen notificatie, gebruiker niet bericht!',
    errorValid:      'Error: alles bestanden hebben niet gevalideert geweest!',
    errorCnx:        'Verbindingsfout: Authentificatie noodzakelijk.',
    error0:          'Verbindingsfout.',
    error5xx:        'Dienst tijdelijk onbeschikbaar. Probeer het later opnieuw.',
    errorSession:    'Sessie verlopen',
    myOwnAccount:    '(MIJN EIGEN FOLDERS)',
    clientListEmpty: 'Error: lijst van klanten niet terugtrekken.'
  },
  en: {
    button:          {
      search:      'Searching...',
      reload:      'Reload',
      colVisible:  'Show Column',
      multiDL:     'Download files',
      multiDelete: 'Delete files',
      myContact:   'My contacts',
      close:       'Close',
      filter:      {
        filterby: 'Filter by',
        new:      'New Files',
        notDL:    'Files not downloaded',
        clear:    'Clear all filters'
      },
      help:        'Help',
      signout:     'Sign Out',
      client:      'Company',
      validation:  'Validate files'
    },
    breadrumb:       'New Files not downloaded yet',
    result:          'Results: ',
    url:             {
      table: '../cdn/DataTables/1.10.4/resources/language/en.json'
    },
    col:             {
      new:         'New',
      date:        'Date',
      name:        'Name',
      user:        'User',
      empl:        'Employer',
      label:       'Label',
      refdoc:      'N° Doc',
      size:        'Size',
      ext:         'Type',
      path:        'Path',
      refCl:       'Ref Client',
      count:       'Counter',
      refGS:       'Ref Group S',
      uploadStamp: 'Upload Time',
      del:         'Delete',
      comment:     'Comments'
    },
    tree:            {
      root:   'Inbox',
      upload: 'Outbox',
      valid:  'File validation',
      other:  'Other files'
    },
    sideMenu:        {
      config: 'Table Configuration',
      reset:  'Reset Vue'
    },
    file:            {
      add:      'File(s) added',
      del:      'File(s) deleted',
      dl:       'Your files are being downloaded. \n\n Thank you for your patience.',
      noselect: 'No file selected.',
      valid:    'File(s) validated.'
    },
    datepicker:      {
      to:    'to',
      start: 'Start Date',
      end:   'End Date'
    },
    dialog:          {
      delAction:      'Delete File',
      delSure:        'Are you sure you want to delete file(s)? \n It may take a moment',
      delConfirm:     'Delete',
      validAction:    'Validate file',
      validSure:      'Are you sure you want to publish file(s) to the client?',
      validConfirm:   'Validate',
      signout:        'Sign Off',
      signoutSure:    'Are you sure?',
      signoutConfirm: 'Log off',
      cancel:         'Cancel'
    },
    help:            {
      skipLabel:   'EXIT',
      nextLabel:   'NEXT',
      prevLabel:   'PREVIOUS',
      doneLabel:   'END',
      welcome:     'Welcome in Group S Transfer. This tutorial will guide through the features of the application. You can use the arrow keys on your keyboard to browse.',
      table:       'This is the content of your server.',
      checkbox:    'Check to select more than one file to download.',
      dlfile:      'Click on this icon to download only one file. (The number on the right of the icon is the number of downloads).',
      dlfileLabel: 'Click on this icon to download only one file.',
      remove:      'Delete the file and free up disk space.',
      headers:     'The headers allow you to sort (by column, by alphabetical order,ascending-descending). "Ctrl + clic" allows to group filters.',
      bottom:      'Choose the number of entry to show.',
      upload:      'Click on this button to send your files to Group S.',
      menu:        'Select a file category or a type of file in order to apply a filter .',
      filterby:    'Select your new files, your files not yet downloaded or deactivate filters.',
      searchBox:   'Search by keyword. Input a employer number or a label to filter files.',
      datepicker:  'Define a period as a filter.',
      reloadme:    'Click on this button to reload the page.',
      breadcrumb:  'This is the list of filter by category and document number.',
      uploaded:    'See the files you sent to Group S.',
      columnMenu:  'Show/hide columns from the table. ',
      logoff:      'Click here to log off.'
    },
    warningQuota:    "This application is exclusively aimed to transfer files. Please delete files once you've downloaded them.",
    listAll:         'all',
    showHide:        'Show / hide columns',
    upload:          'Upload files on the server',
    modalupload:     'Upload files to Group S server',
    modalbq:         'Please, select the folder of upload before uploading files.',
    modalbtn:        'Select files to upload',
    notification:    'Notify the user by email.',
    noNotif:         'No notification, user not warned.',
    errorValid:      'Error: all files were not validate!',
    errorCnx:        'Connection Error: Authentication required.',
    error0:          'Error: Problem retrieving file list',
    error5xx:        'Service temporally unavailable, please try later.',
    errorSession:    'Session expired',
    myOwnAccount:    '(MY OWN ACCOUNT)',
    clientListEmpty: 'Error: Cannot retrieve client list.'
  }
}

//export default i18n

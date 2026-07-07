'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  Clock, 
  Search, 
  ArrowRight, 
  Tag, 
  ChevronRight, 
  TrendingUp, 
  Sparkles, 
  FileText, 
  ShoppingBag, 
  ArrowLeft 
} from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: 'Metabolic' | 'Tissue Repair' | 'Longevity' | 'Guides' | 'Quality';
  keywords: string[];
  summary: string;
  content: React.ReactNode;
  featured?: boolean;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Science of Retatrutide: The Triple Receptor Agonist Dominating Peptide Research in 2026',
    slug: 'science-of-retatrutide-triple-agonist',
    date: 'July 2, 2026',
    readTime: '7 min read',
    category: 'Metabolic',
    featured: true,
    keywords: ['Retatrutide UK', 'triple receptor agonist', 'buy retatrutide', 'peptide research', 'GLP-1 GIP glucagon'],
    summary: 'Discover the molecular mechanics of Retatrutide (LY3437943), the novel triple receptor agonist currently transforming metabolic and adiposity studies. We analyze its unique interactions with GLP-1, GIP, and Glucagon receptors.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">Introduction to Triple Agonism</p>
        <p>
          In the rapidly evolving landscape of metabolic research, <strong className="text-slate-900">Retatrutide (LY3437943)</strong> represents the absolute vanguard. While previous dual-agonist peptides like Tirzepatide (targeting GLP-1 and GIP) yielded remarkable scientific outcomes, Retatrutide introduces a third pillar of metabolic signaling: the <strong className="text-slate-900">Glucagon Receptor (GCGR)</strong>. This triple receptor agonism achieves unparalleled synergy in cellular assays and animal modeling.
        </p>
        
        <p className="font-semibold text-slate-900 text-lg">The Three-Pronged Molecular Mechanism</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>GLP-1 (Glucagon-Like Peptide-1):</strong> Stimulates glucose-dependent insulin secretion, regulates gastric emptying rates in-vitro, and signals central satiety mechanisms.</li>
          <li><strong>GIP (Glucose-Dependent Insulinotropic Polypeptide):</strong> Synergizes with GLP-1 to enhance beta-cell responsiveness, but also regulates lipid metabolic pathways and reduces systemic inflammation in adipose models.</li>
          <li><strong>Glucagon Receptor (GCGR):</strong> The crucial differentiator. By directly stimulating glucagon pathways alongside GLP-1 and GIP, Retatrutide activates hepatic fat oxidation, accelerates lipid clearance, and elevates thermogenic energy expenditure without triggering compensatory hyperglycemia.</li>
        </ul>

        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl">
          <p className="text-xs font-bold text-blue-800 uppercase tracking-wide">Key Research Observation</p>
          <p className="text-xs text-blue-900 mt-1">
            Comparative studies demonstrate that the addition of glucagon receptor agonism in Retatrutide increases energy expenditure and directly addresses hepatic steatosis (fatty liver) significantly more effectively than mono- or dual-agonists.
          </p>
        </div>

        <p className="font-semibold text-slate-900 text-lg">Why Researchers in the UK are Buying Retatrutide</p>
        <p>
          UK laboratory protocols investigating insulin resistance, severe obesity, and metabolic syndrome prefer <strong className="text-blue-600">Retatrutide UK</strong> batches for their unique efficacy profiles. In cellular models, Retatrutide has demonstrated robust protective effects on pancreatic islet cells and has shown potential in reversing lipid accumulation markers within cultured hepatocytes.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Conclusion</p>
        <p>
          Retatrutide stands as the most advanced therapeutic peptide candidate in metabolic study. Its triple receptor affinity provides a highly complex, multi-layered metabolic pathway regulator that promises to redefine how research laboratories approach endocrine disorders.
        </p>
      </div>
    )
  },
  {
    id: '2',
    title: 'Why BPC-157 is Trending Globally: Cellular Healing and Tissue Repair Mechanisms',
    slug: 'bpc-157-cellular-healing-tissue-repair',
    date: 'June 28, 2026',
    readTime: '5 min read',
    category: 'Tissue Repair',
    keywords: ['BPC-157 healing', 'buy BPC-157 UK', 'peptide tissue repair', 'BPC-157 research'],
    summary: 'Explore the biological action of Body Protection Compound 157 (BPC-157). Learn how this pentadecapeptide stimulates angiogenesis, recruits fibroblasts, and accelerates tendon-to-bone healing in laboratory assays.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">The Healing Pentadecapeptide</p>
        <p>
          Derived from a protein found naturally in human gastric juice, <strong className="text-slate-900">BPC-157</strong> is a synthetic peptide consisting of 15 amino acids. Known scientifically as Body Protection Compound 157, this stable agent has captured the attention of regenerative medicine researchers due to its extraordinary, rapid cytoprotective and wound-healing capabilities.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Key Mechanisms of Cellular Action</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Upregulation of VEGF (Vascular Endothelial Growth Factor):</strong> BPC-157 dramatically accelerates <em>angiogenesis</em> (the creation of new blood vessels), supplying damaged tissues with vital oxygen, amino acids, and repair signals.</li>
          <li><strong>Activation of Fibroblasts:</strong> It stimulates the migration and proliferation of fibroblasts, which synthesize collagen type I—the structural foundation of tendons, ligaments, and skin.</li>
          <li><strong>FGR Reciprocal Signaling:</strong> By interacting directly with growth factor pathways, it coordinates systematic healing across multiple tissue layers.</li>
        </ol>

        <p className="font-semibold text-slate-900 text-lg">Tendon, Ligament, and Gut Repair</p>
        <p>
          One of the major bottlenecks in physiology research is the slow healing rate of avascular tissues like tendons and ligaments. Studies indicate BPC-157 significantly speeds up tendon-to-bone healing, reinforcing the mechanical strength of the repair site. Furthermore, its gastric origin makes it highly effective in gastrointestinal mucosal repair studies, showing protective outcomes in inflammatory bowel disease models.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Procurement and Stability</p>
        <p>
          When looking to <strong className="text-blue-600">buy BPC-157 UK</strong> laboratories prioritize highly purified, lyophilized variants. Because BPC-157 is highly stable, it retains biological activity across a wide range of temperatures, making it a highly reliable and popular model compound in cellular assays.
        </p>
      </div>
    )
  },
  {
    id: '3',
    title: 'Retatrutide vs. Tirzepatide: A Comparative Study on Metabolic Rate & Thermogenesis',
    slug: 'retatrutide-vs-tirzepatide-comparison',
    date: 'June 22, 2026',
    readTime: '6 min read',
    category: 'Metabolic',
    keywords: ['Retatrutide vs Tirzepatide', 'buy peptides UK', 'weight research peptides', 'metabolic studies'],
    summary: 'A detailed biochemical breakdown comparing Retatrutide and Tirzepatide. Learn how the glucagon agonist component in Retatrutide shifts the metabolic paradigm compared to dual GLP-1/GIP agonists.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">The Battle of Multi-Receptor Agonists</p>
        <p>
          With the massive success of dual GLP-1/GIP receptor agonists in current scientific literature, the comparison between the established <strong className="text-slate-900">Tirzepatide</strong> and the newly developed <strong className="text-slate-900">Retatrutide</strong> has become a primary focus of academic metabolic studies. Both peptides represent structural breakthroughs in hormone mimetic design.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Biochemical Differences: Double vs. Triple Agonism</p>
        <div className="overflow-x-auto my-4 border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs sm:text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Parameter</th>
                <th className="p-3">Tirzepatide</th>
                <th className="p-3">Retatrutide</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-3 font-medium text-slate-800">Receptor Targets</td>
                <td className="p-3">Dual: GLP-1 + GIP</td>
                <td className="p-3 font-semibold text-blue-600">Triple: GLP-1 + GIP + Glucagon</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-800">Primary Mechanism</td>
                <td className="p-3">Insulin regulation, slow gastric emptying</td>
                <td className="p-3">Insulin regulation + Active fat lipolysis</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-800">Energy Expenditure</td>
                <td className="p-3">Mainly dietary restriction driven</td>
                <td className="p-3">Direct stimulation of thermogenesis</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-slate-800">Hepatic Fat Reduction</td>
                <td className="p-3">Secondary to weight loss</td>
                <td className="p-3 font-semibold text-green-600">Direct hepatic lipid clearance</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-semibold text-slate-900 text-lg">The Thermogenic Advantage</p>
        <p>
          While Tirzepatide focuses heavily on calorie-intake regulation by slowing stomach digestion and signaling central fullness, Retatrutide goes a step further. By activating glucagon receptors, Retatrutide signals the liver to oxidize lipids and increase cellular mitochondria thermogenesis. This means Retatrutide actively increases resting metabolic expenditure in metabolic studies, even when nutrition remains stable.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Choosing the Right Research Model</p>
        <p>
          For laboratories deciding which to use, Tirzepatide remains an excellent control compound with a massive body of existing literature. However, for cutting-edge investigations into cellular bioenergetics, mitochondrial function, and non-alcoholic fatty liver disease (NAFLD), Retatrutide is quickly becoming the absolute benchmark.
        </p>
      </div>
    )
  },
  {
    id: '4',
    title: 'Understanding Peptide Reconstitution: A Step-by-Step Laboratory Guide',
    slug: 'peptide-reconstitution-guide',
    date: 'June 15, 2026',
    readTime: '5 min read',
    category: 'Guides',
    keywords: ['peptide reconstitution', 'bacteriostatic water peptides', 'how to mix peptides', 'peptide calculator'],
    summary: 'A precise procedural guide for laboratory technicians on the reconstitution of lyophilized peptide powders. Includes sterilisation, diluent selection, and calculation math.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">The Physics of Reconstitution</p>
        <p>
          Peptides are highly delicate biomolecules. When manufactured, they are freeze-dried (lyophilized) into a crystal powder matrix to maintain structural stability. Reconstitution is the critical process of dissolving this powder back into a sterile liquid state ready for scientific testing. Doing so incorrectly can denature (damage) the delicate peptide chains, rendering the batch useless.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Procedural Step-by-Step Protocol</p>
        <ol className="list-decimal pl-5 space-y-3">
          <li>
            <strong>Temperature Equilibrium:</strong> Prior to reconstitution, allow the lyophilized vial to sit at room temperature for 15-20 minutes. This prevents condensation inside the vial, which can lead to moisture contamination and rapid degradation.
          </li>
          <li>
            <strong>Sanitisation:</strong> Wipe the rubber stopper of the peptide vial and the top of your sterile diluent vial with a high-grade 70% Isopropyl Alcohol swab. Let them air-dry completely.
          </li>
          <li>
            <strong>Diluent Selection:</strong> For general laboratory assays, <strong className="text-slate-900">Bacteriostatic Water (sterile water with 0.9% Benzyl Alcohol)</strong> is preferred because the alcohol content prevents bacterial colonization, allowing the solution to remain viable in storage for up to 14-21 days.
          </li>
          <li>
            <strong>Slow Transfer:</strong> Draw the desired volume of diluent. Insert the needle into the peptide vial at an angle. Aim the needle at the glass wall of the vial, rather than directly at the powder. Slowly inject the liquid, allowing it to trickle down the side.
          </li>
          <li>
            <strong>Gentle Dissolving:</strong> <em>NEVER</em> shake the vial. Shaking creates structural shear force that destroys peptide chains. Instead, gently roll the vial between the palms of your hands until the liquid is perfectly clear.
          </li>
        </ol>

        <p className="font-semibold text-slate-900 text-lg">Reconstitution Mathematics Example</p>
        <p>
          To achieve a specific concentration, use the following formula: <strong className="text-blue-600">Concentration (mg/mL) = Peptide mass (mg) &divide; Diluent volume (mL)</strong>. 
          For instance, dissolving a 10mg vial of Melanotan II in 2.0mL of Bacteriostatic Water yields a concentration of 5.0mg/mL (or 5.0mcg per microliter).
        </p>
      </div>
    )
  },
  {
    id: '5',
    title: 'The Rise of Melanotan II in Biochemical Research: Synthesis and Efficacy',
    slug: 'melanotan-ii-synthesis-efficacy',
    date: 'June 10, 2026',
    readTime: '4 min read',
    category: 'Longevity',
    keywords: ['Melanotan II research', 'buy melanotan UK', 'peptide skin research'],
    summary: 'Analyze the synthetic analog of alpha-melanocyte stimulating hormone (a-MSH). We review its melanogenesis action and its application in photoprotective cutaneous research.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">What is Melanotan II?</p>
        <p>
          <strong className="text-slate-900">Melanotan II (MT-2)</strong> is a synthetically engineered analog of the peptide hormone alpha-melanocyte-stimulating hormone (&alpha;-MSH). Originally synthesized at the University of Arizona to research non-invasive prevention methods against ultraviolet (UV) induced skin cancers, Melanotan II exhibits exceptional affinity for melanocortin receptors.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Biological Pathway Activation</p>
        <p>
          Unlike natural hormones, MT-2 possesses a circular structure that makes it highly resistant to enzyme degradation. When introduced into cutaneous tissue assays, it binds and activates <strong className="text-slate-900">MC1, MC3, MC4, and MC5</strong> melanocortin receptors:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>MC1 Receptor Activation:</strong> Stimulates melanocytes to produce eumelanin (the dark brown/black pigment) instead of pheomelanin (red/yellow pigment), providing a protective skin barrier against UV radiation.</li>
          <li><strong>MC4 Receptor Activation:</strong> Exhibits metabolic signaling effects, influencing food intake, satiety pathways, and vascular pressure in cardiovascular models.</li>
        </ul>

        <p className="font-semibold text-slate-900 text-lg">Scientific Efficacy and Laboratory Application</p>
        <p>
          In photobiology, MT-2 is used to study the mechanisms of UV-independent pigmentation. Researchers use it to explore how cells can be pre-conditioned to resist sun damage, offering vital insights into cellular defense mechanisms against melanoma.
        </p>
      </div>
    )
  },
  {
    id: '6',
    title: 'Ipamorelin and CJC-1295: The Power of Synergistic Growth Hormone Research',
    slug: 'ipamorelin-cjc-1295-synergistic-peptide',
    date: 'June 5, 2026',
    readTime: '6 min read',
    category: 'Longevity',
    keywords: ['CJC-1295 Ipamorelin', 'buy peptides UK', 'growth hormone secretagogues'],
    summary: 'A scientific analysis of GHRH and GHRP synergy. Discover why combining CJC-1295 and Ipamorelin triggers a more sustainable growth hormone release than single peptide administration.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">Understanding GH Secretagogues</p>
        <p>
          In endocrinology research, maximizing the natural pulsatile release of Growth Hormone (GH) is a key goal. Two major classes of synthetic peptides are used: <strong className="text-slate-900">GHRH analogs</strong> (Growth Hormone-Releasing Hormone) and <strong className="text-slate-900">GHRPs</strong> (Growth Hormone-Releasing Peptides). Individually they are effective, but when combined, they trigger a synergistic response.
        </p>

        <p className="font-semibold text-slate-900 text-lg">The Synergy Explained: CJC-1295 + Ipamorelin</p>
        <ul className="list-disc pl-5 space-y-3">
          <li>
            <strong>CJC-1295 (without DAC):</strong> A synthetic GHRH analog consisting of 30 amino acids. It mimics natural GHRH by binding directly to the pituitary gland, signalling the cell matrix to synthesize and release growth hormone.
          </li>
          <li>
            <strong>Ipamorelin:</strong> A highly selective GHRP that acts as a ghrelin receptor agonist. It binds to pituitary cells, amplifying the strength of the growth hormone pulse, while selectively blocking somatostatin—the hormone responsible for stopping GH release.
          </li>
        </ul>

        <p className="font-semibold text-slate-900 text-lg">Why the Combination is Amplified</p>
        <p>
          When GHRH (CJC-1295) and GHRP (Ipamorelin) are co-administered in clinical models, they target different pathways of the pituitary gland. GHRH sets the pulse of GH release, while the GHRP dramatically multiplies the amplitude of that pulse. The result is a growth hormone release that is up to <strong className="text-blue-600">5 times stronger</strong> than administering either peptide on its own, without causing undesirable spikes in cortisol or prolactin.
        </p>
      </div>
    )
  },
  {
    id: '7',
    title: 'Peptide Storage Best Practices: Preserving Lyophilized Powder Integrity',
    slug: 'peptide-storage-best-practices',
    date: 'May 30, 2026',
    readTime: '4 min read',
    category: 'Guides',
    keywords: ['store peptides', 'peptide stability', 'lyophilized peptide powder', 'UK peptide source'],
    summary: 'Learn the exact environmental parameters needed to prevent hydrolysis, peptide oxidation, and thermal denaturation. Essential reading for inventory managers.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">Peptide Vulnerability Factors</p>
        <p>
          Synthetic peptides are chemically vulnerable to three main environmental factors: <strong className="text-slate-900">temperature, moisture (hydrolysis), and light (ultraviolet oxidation)</strong>. To protect the investment and ensure absolute research repeatability, proper cold-chain storage is mandatory.
        </p>

        <p className="font-semibold text-slate-900 text-lg">The Golden Rules of Peptide Storage</p>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3">
          <div className="flex gap-2">
            <span className="text-blue-600 font-bold">1. Lyophilized Powders:</span>
            <p className="text-sm text-slate-700">
              Can remain stable at room temperature for brief periods (during shipping), but for long-term preservation, store in a standard freezer at <strong>-20°C</strong> or colder.
            </p>
          </div>
          <div className="flex gap-2 border-t border-slate-200/50 pt-2">
            <span className="text-blue-600 font-bold">2. Reconstituted Liquid:</span>
            <p className="text-sm text-slate-700">
              Must always be refrigerated at <strong>2°C to 8°C</strong>. Never freeze reconstituted peptides, as repeated freeze-thaw cycles form ice crystals that break the structural peptide bonds.
            </p>
          </div>
          <div className="flex gap-2 border-t border-slate-200/50 pt-2">
            <span className="text-blue-600 font-bold">3. UV Protection:</span>
            <p className="text-sm text-slate-700">
              Keep all vials stored in dark containers or boxes. Direct exposure to fluorescent laboratory lighting or sunlight accelerates oxidation.
            </p>
          </div>
        </div>

        <p className="font-semibold text-slate-900 text-lg">Procurement Note</p>
        <p>
          At UK Peptides Bio, all peptides are packaged in heavy-walled, high-vacuum sealed borosilicate vials inside insulated thermal wrappers to guarantee structural preservation from our warehouse straight to your laboratory freezer.
        </p>
      </div>
    )
  },
  {
    id: '8',
    title: 'Exploring Epitalon: The Telomerase Activator Reshaping Longevity Research',
    slug: 'exploring-epitalon-telomerase-activator',
    date: 'May 24, 2026',
    readTime: '5 min read',
    category: 'Longevity',
    keywords: ['Epitalon research', 'telomere peptides', 'longevity science', 'buy epitalon UK'],
    summary: 'An investigative overview of Epithalon (Epitalon), the synthetic tetrapeptide shown to stimulate telomerase activity, slow cellular aging, and extend lifespan in clinical models.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">The Telomere Concept in Cellular Aging</p>
        <p>
          At the end of every chromosome lies a protective cap called a <strong className="text-slate-900">telomere</strong>. Each time a cell divides, these telomeres get shorter. Eventually, they become so short that the cell can no longer divide, entering a state of permanent dysfunction called cellular senescence. This process is a major hallmark of aging.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Epitalon: The Synthetic Tetrapeptide</p>
        <p>
          <strong className="text-slate-900">Epitalon</strong> (Ala-Glu-Asp-Gly) is a four-amino-acid peptide designed to mimic epithalamin, a natural hormone produced by the pineal gland. Its primary mechanism of action is the active stimulation of <strong className="text-slate-900">Telomerase</strong>, an enzyme capable of rebuilding and elongating shortened telomeres.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Research Insights and Longevity Studies</p>
        <p>
          In laboratory culture assays, cells treated with Epitalon demonstrate an increased capacity for cell division, overcoming the typical Hayflick Limit. Furthermore, mouse models treated with Epitalon show a significant reduction in spontaneous tumor formation, improved immune cell profiles, and a notable extension in maximum lifespan, making it a highly valued compound in anti-aging research.
        </p>
      </div>
    )
  },
  {
    id: '9',
    title: 'Tesofensine: The Triple Monoamine Reuptake Inhibitor for Advanced Weight Management Studies',
    slug: 'tesofensine-weight-management-research',
    date: 'May 18, 2026',
    readTime: '6 min read',
    category: 'Metabolic',
    keywords: ['Tesofensine research', 'buy tesofensine UK', 'metabolic research peptides'],
    summary: 'Understand the pharmacokinetics of Tesofensine. We discuss its action on dopamine, serotonin, and noradrenaline reuptake, and how it induces robust thermogenic activity.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">What is Tesofensine?</p>
        <p>
          While peptides dominate the GLP-1 and triple-agonist landscapes, <strong className="text-slate-900">Tesofensine (NS2330)</strong> represents a highly innovative, non-peptidic small molecule. It is classified as a potent <strong className="text-slate-900">Triple Monoamine Reuptake Inhibitor (TRI)</strong>, originally researched for neurodegenerative conditions and subsequently repurposed for advanced metabolic studies.
        </p>

        <p className="font-semibold text-slate-900 text-lg">Triple Reuptake Inhibition Pathways</p>
        <p>
          Tesofensine works by blocking the presynaptic reuptake transporters for three critical neurotransmitters:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Noradrenaline (Norepinephrine):</strong> Stimulates the sympathetic nervous system, boosting energy expenditure and fat breakdown.</li>
          <li><strong>Dopamine:</strong> Regulates the brain’s reward center, reducing cravings for palatable foods.</li>
          <li><strong>Serotonin:</strong> Coordinates satiety signals, helping to reduce overall food consumption in trial models.</li>
        </ul>

        <p className="font-semibold text-slate-900 text-lg">Laboratory Efficacy Profile</p>
        <p>
          In animal assays, Tesofensine has demonstrated the ability to produce weight loss that is up to twice as powerful as older metabolic agents. It achieves this by combining active metabolic thermogenesis with highly effective appetite regulation, making it a key compound for metabolic research.
        </p>
      </div>
    )
  },
  {
    id: '10',
    title: 'How to Avoid Counterfeit Peptides: A Buyer\'s Guide for UK Laboratories',
    slug: 'avoiding-counterfeit-peptides-uk-labs',
    date: 'May 12, 2026',
    readTime: '5 min read',
    category: 'Quality',
    keywords: ['HPLC verified peptides', 'UK peptide laboratory', 'peptide COA check', 'buy peptides safely'],
    summary: 'A critical checklist of verification steps for procurement heads. Learn to interpret mass spectrometry peaks and verify the legitimacy of laboratory certifications.',
    content: (
      <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
        <p className="font-semibold text-slate-900 text-lg">The Counterfeit Peptide Crisis</p>
        <p>
          The booming global interest in research peptides has driven an influx of low-grade, under-dosed, or completely fake compounds into the market. Buying from unverified sources not only wastes research funds but can introduce harmful contaminants like heavy metals or bacterial endotoxins into delicate assay systems.
        </p>

        <p className="font-semibold text-slate-900 text-lg">How to Verify Peptide Authenticity</p>
        <ol className="list-decimal pl-5 space-y-3 text-sm">
          <li>
            <strong>Analyze the HPLC Graph:</strong> High-Performance Liquid Chromatography measures the purity of a compound. Look for a single, tall, narrow peak on the graph. Multiple peaks indicate chemical impurities or degradation products.
          </li>
          <li>
            <strong>Check the Mass Spectrometry (MS) Data:</strong> Mass spectrometry confirms the identity of the peptide by measuring its precise molecular weight. The primary peak on the MS chart must match the theoretical molecular weight of the peptide sequence.
          </li>
          <li>
            <strong>Verify the Laboratory:</strong> Ensure the Certificates of Analysis (COAs) are issued by reputable, independent, third-party laboratories. Be suspicious of COAs with redacted testing dates or names.
          </li>
        </ol>

        <p className="font-semibold text-slate-900 text-lg">Commitment to Quality at UK Peptides Bio</p>
        <p>
          At UK Peptides Bio, we remove all doubt. Every batch of peptides we distribute is individually tested and validated via rigorous HPLC and MS protocols. We provide fully accessible, unredacted COAs with clear batch numbers, establishing us as the trusted standard for peptide research in the United Kingdom.
        </p>
      </div>
    )
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const categories = useMemo(() => {
    return ['All', 'Metabolic', 'Tissue Repair', 'Longevity', 'Guides', 'Quality'];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.keywords.some((k) => k.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((post) => post.featured);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Blog Container */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!activePost ? (
            /* BLOG DIRECTORY VIEW */
            <motion.div
              key="directory"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {/* Header */}
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  UK Peptides Science Hub
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  UK Peptide & Retatrutide Research Blog
                </h1>
                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                  SEO & AI-optimized scientific insights, HPLC verification analyses, and procedural guides written for laboratory researchers and procurement officers.
                </p>
              </div>

              {/* Featured Post Banner */}
              {featuredPost && !searchTerm && selectedCategory === 'All' && (
                <div className="bg-gradient-to-tr from-slate-900 via-blue-950 to-indigo-950 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col md:flex-row relative">
                  <div className="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Featured Research
                  </div>
                  <div className="p-6 sm:p-8 md:p-10 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-blue-300 font-medium">
                        <span>{featuredPost.category}</span>
                        <span>&bull;</span>
                        <span>{featuredPost.date}</span>
                        <span>&bull;</span>
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                        {featuredPost.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                        {featuredPost.summary}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredPost.keywords.map((kw, i) => (
                        <span key={i} className="text-[10px] bg-white/10 hover:bg-white/20 border border-white/10 text-slate-200 px-2 py-0.5 rounded-md font-mono">
                          #{kw}
                        </span>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={() => setActivePost(featuredPost)}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        Read Research Article
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Search & Filter Controls */}
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
                {/* Search Bar */}
                <div className="relative flex-1">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search keywords (e.g. Retatrutide, BPC-157, HPLC)..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-blue-500 text-slate-800"
                  />
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-1.5">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-xl transition-all border cursor-pointer ${
                        selectedCategory === cat
                          ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-500/10'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Blog Posts Grid */}
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16 bg-white border border-slate-200 rounded-3xl">
                  <FileText className="w-12 h-12 mx-auto text-slate-300 mb-2" />
                  <p className="text-sm font-bold text-slate-500">No blog posts found</p>
                  <p className="text-xs text-slate-400 mt-1">Try resetting your filters or adjusting your search term.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => (
                    <div 
                      key={post.id} 
                      className="bg-white rounded-2xl border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
                    >
                      <div className="p-5 space-y-4">
                        {/* Category & Date */}
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium">
                          <span className="flex items-center gap-1 font-bold text-blue-600 uppercase tracking-wide">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 
                          onClick={() => setActivePost(post)}
                          className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug text-base cursor-pointer"
                        >
                          {post.title}
                        </h3>

                        {/* Summary */}
                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                          {post.summary}
                        </p>
                      </div>

                      {/* Card Footer */}
                      <div className="p-5 pt-0 border-t border-slate-50 flex items-center justify-between bg-slate-50/50">
                        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                        
                        <button
                          onClick={() => setActivePost(post)}
                          className="text-xs font-bold text-blue-600 flex items-center gap-1 hover:gap-2 transition-all cursor-pointer"
                        >
                          Read Article
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ) : (
            /* DETAILED BLOG POST READER VIEW */
            <motion.div
              key="reader"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto"
            >
              {/* Back Button */}
              <div className="p-4 sm:p-6 border-b border-slate-100 bg-slate-50/80 flex items-center justify-between">
                <button
                  onClick={() => setActivePost(null)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Hub Directory
                </button>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-blue-600 hover:underline"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Visit Lab Shop
                </Link>
              </div>

              {/* Reader Body */}
              <article className="p-6 sm:p-10 space-y-6">
                {/* Meta */}
                <div className="flex flex-wrap gap-4 items-center text-xs sm:text-sm text-slate-400 font-medium">
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-bold uppercase tracking-wide text-xs">
                    {activePost.category}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {activePost.date}
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {activePost.readTime}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {activePost.title}
                </h1>

                {/* Keywords list */}
                <div className="flex flex-wrap gap-1.5 border-y border-slate-100 py-3">
                  <span className="text-xs text-slate-400 font-semibold self-center mr-1">SEO Keywords:</span>
                  {activePost.keywords.map((kw, i) => (
                    <span key={i} className="text-[10px] sm:text-xs bg-slate-100 border border-slate-200 text-slate-600 px-2.5 py-0.5 rounded-lg font-mono">
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Interactive Content */}
                <div className="prose max-w-none prose-slate mt-4">
                  {activePost.content}
                </div>

                {/* Call to action */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-6 sm:p-8 mt-10 text-center space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900">Need High-Purity Compounds for Your Next Assay?</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                    UK Peptides Bio provides certified 99%+ pure Retatrutide, BPC-157, and other premium research compounds to UK laboratories. Every batch is HPLC and Mass Spectrometry verified.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Link
                      href="/shop"
                      className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-lg shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Browse Our Lab Catalog
                      <ShoppingBag className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={() => setActivePost(null)}
                      className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
                    >
                      Read More Articles
                    </button>
                  </div>
                </div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

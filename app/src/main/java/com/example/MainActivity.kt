package com.example

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import android.widget.Toast
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.horizontalScroll
import androidx.compose.foundation.interaction.MutableInteractionSource
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.navigationBarsPadding
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.statusBarsPadding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowForward
import androidx.compose.material.icons.filled.CheckCircle
import androidx.compose.material.icons.filled.Code
import androidx.compose.material.icons.filled.ContentCopy
import androidx.compose.material.icons.filled.Email
import androidx.compose.material.icons.filled.Language
import androidx.compose.material.icons.filled.Layers
import androidx.compose.material.icons.filled.OpenInNew
import androidx.compose.material.icons.filled.RocketLaunch
import androidx.compose.material.icons.filled.Security
import androidx.compose.material.icons.filled.Star
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.blur
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.draw.scale
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalClipboardManager
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.AnnotatedString
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.ui.theme.DarkBg
import com.example.ui.theme.DarkBorder
import com.example.ui.theme.DarkSurface
import com.example.ui.theme.DarkSurfaceElevated
import com.example.ui.theme.DiscordBlue
import com.example.ui.theme.MyApplicationTheme
import com.example.ui.theme.RedAccent
import com.example.ui.theme.RedDark
import com.example.ui.theme.RedGlow
import com.example.ui.theme.RedPrimary
import com.example.ui.theme.TextDim
import com.example.ui.theme.TextMuted
import com.example.ui.theme.TextWhite

class MainActivity : ComponentActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    enableEdgeToEdge()
    setContent {
      MyApplicationTheme {
        MCDeveloperHubApp()
      }
    }
  }
}

// Data models for services
data class ServiceItem(
  val id: String,
  val title: String,
  val category: String,
  val price: String,
  val subtitle: String,
  val description: String,
  val badge: String? = null,
  val features: List<String>,
  val options: List<Pair<String, String>> = emptyList()
)

val SampleWebsiteServices = listOf(
  ServiceItem(
    id = "hosting-web",
    title = "Hosting Website",
    category = "Website",
    price = "₹1599",
    subtitle = "Starting Price",
    description = "Complete modern hosting and billing platform website with game server ordering integration, customer portal, and fast responsive UI.",
    badge = "POPULAR",
    features = listOf("Modern Responsive UI", "Client Portal Ready", "Speed Optimized", "SEO & Meta Tag Setup")
  ),
  ServiceItem(
    id = "mc-server-web",
    title = "Minecraft Server Website",
    category = "Website",
    price = "₹999",
    subtitle = "Starting Price",
    description = "High-impact Minecraft community portal with live server player count, Tebex/CraftingStore shop integration, rules, and staff list.",
    badge = "BESTSELLER",
    features = listOf("Live Player Counter", "Store Integration", "Custom Domain Ready", "Mobile Optimized")
  ),
  ServiceItem(
    id = "custom-web",
    title = "Custom Bespoke Website",
    category = "Website",
    price = "Custom Quote",
    subtitle = "Tailored",
    description = "Fully bespoke web application built from scratch to match your community or brand's exact specifications and database needs.",
    badge = "ENTERPRISE",
    features = listOf("Custom Architecture", "Database & API Integration", "Tailored Animations", "Full Source Code")
  )
)

val SampleMCServices = listOf(
  ServiceItem(
    id = "mc-proxy",
    title = "Proxy Setup",
    category = "Minecraft",
    price = "₹100",
    subtitle = "Fixed Package",
    description = "BungeeCord / Velocity high-performance proxy configuration, firewall rules, and backend server routing.",
    badge = "ESSENTIAL",
    features = listOf("Velocity / BungeeCord", "Anti-Bot Configuration", "Multi-Lobby Balancing")
  ),
  ServiceItem(
    id = "mc-lobby",
    title = "Lobby / Hub Setup",
    category = "Minecraft",
    price = "₹200",
    subtitle = "Fixed Package",
    description = "Feature-packed hub server with server selectors, parkour, cosmetic menus, spawn protections, and visual scoreboards.",
    badge = "FEATURED",
    features = listOf("Custom Server Selector", "Cosmetics & Gadgets", "Protected Spawn Region")
  ),
  ServiceItem(
    id = "mc-survival",
    title = "Survival Server",
    category = "Minecraft",
    price = "₹99 / ₹999",
    subtitle = "Premade / Custom",
    description = "Classic or modern economy survival with land claims, custom shops, ranks, quests, auction house, and RTP.",
    badge = "POPULAR",
    features = listOf("Land Claiming System", "Economy & Auction House", "Ranks & Permissions", "Custom Quests"),
    options = listOf("Premade" to "₹99", "Custom / Not Premade" to "₹999")
  ),
  ServiceItem(
    id = "mc-lifesteal",
    title = "Lifesteal Server",
    category = "Minecraft",
    price = "₹159 / ₹1299",
    subtitle = "Premade / Custom",
    description = "Intense PvP Lifesteal experience with custom heart recipes, combat logging, player revive beacons, and coin shops.",
    badge = "TRENDING",
    features = listOf("Heart Stealing Logic", "Custom Crafting Recipes", "Combat Tagging Anti-Cheat", "PvP Arena"),
    options = listOf("Premade" to "₹159", "Custom / Not Premade" to "₹1299")
  ),
  ServiceItem(
    id = "mc-network",
    title = "Complete Network Setup",
    category = "Minecraft",
    price = "₹699 / ₹5000",
    subtitle = "Premade / Custom",
    description = "Complete full-scale Minecraft multi-server network architecture connecting Proxy, Hub, and multiple gamemodes seamlessly.",
    badge = "FULL SUITE",
    features = listOf("Cross-Server Sync", "Global Permissions & Ranks", "Redis & MySQL Setup", "Staff Chat Sync"),
    options = listOf("Premade" to "₹699", "Custom / Not Premade" to "₹5000")
  )
)

val SampleDiscordServices = listOf(
  ServiceItem(
    id = "dc-bot",
    title = "Discord Bot Development",
    category = "Discord",
    price = "₹1000",
    subtitle = "Fixed Rate",
    description = "Custom Discord bot development for automation, moderation, community management and gaming communities with slash commands and database storage.",
    badge = "POPULAR",
    features = listOf("Slash Commands & Buttons", "Ticket & Verify System", "Custom Automation Logic", "24/7 Hosting Guidance")
  ),
  ServiceItem(
    id = "dc-server",
    title = "Discord Server Setup",
    category = "Discord",
    price = "₹100 / ₹500",
    subtitle = "Standard / Premium",
    description = "Professional Discord server setup with organized channels, roles, permissions and community structure tailored for gaming.",
    badge = "COMMUNITY",
    features = listOf("Complete Role Hierarchy", "Permissions Audit & Security", "Welcome & Log Systems", "Aesthetic Channels & Emojis"),
    options = listOf("Premium" to "₹100", "Standard" to "₹500")
  )
)

@Composable
fun MCDeveloperHubApp() {
  val context = LocalContext.current
  val clipboardManager = LocalClipboardManager.current
  var selectedTab by remember { mutableIntStateOf(0) } // 0: Home, 1: Services, 2: Dashboard, 3: Contact
  var selectedCategoryFilter by remember { mutableStateOf("ALL") }

  val discordInvite = "https://discord.gg/qsdzKXdFDk"
  val supportEmail = "McDevloperHub@gmail.com"

  Box(
    modifier = Modifier
      .fillMaxSize()
      .background(Color(0xFF050505))
  ) {
    // Subtle background matrix grid points
    Canvas(modifier = Modifier.fillMaxSize()) {
      val step = 48.dp.toPx()
      val dotRadius = 1.2.dp.toPx()
      val dotColor = Color(0x1AFF0000)
      for (x in 0..(size.width / step).toInt()) {
        for (y in 0..(size.height / step).toInt()) {
          drawCircle(
            color = dotColor,
            radius = dotRadius,
            center = Offset(x * step + 24f, y * step + 24f)
          )
        }
      }
    }

    Scaffold(
      containerColor = Color.Transparent,
      topBar = {
        SleekHeader(
          onJoinDiscord = {
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse(discordInvite))
            context.startActivity(intent)
          }
        )
      },
      bottomBar = {
        SleekBottomNav(
          selectedTab = selectedTab,
          onTabSelected = { selectedTab = it }
        )
      }
    ) { innerPadding ->
      Box(
        modifier = Modifier
          .fillMaxSize()
          .padding(innerPadding)
      ) {
        when (selectedTab) {
          0 -> HomeScreen(
            onExploreServices = { selectedTab = 1 },
            onSelectCategory = { cat ->
              selectedCategoryFilter = cat
              selectedTab = 1
            },
            onJoinDiscord = {
              val intent = Intent(Intent.ACTION_VIEW, Uri.parse(discordInvite))
              context.startActivity(intent)
            }
          )
          1 -> ServicesScreen(
            currentFilter = selectedCategoryFilter,
            onFilterChange = { selectedCategoryFilter = it },
            onOrderService = { service ->
              val intent = Intent(Intent.ACTION_VIEW, Uri.parse(discordInvite))
              context.startActivity(intent)
              Toast.makeText(context, "Opening Discord for ${service.title} order ticket!", Toast.LENGTH_SHORT).show()
            }
          )
          2 -> DashboardScreen(
            onJoinDiscord = {
              val intent = Intent(Intent.ACTION_VIEW, Uri.parse(discordInvite))
              context.startActivity(intent)
            }
          )
          3 -> ContactScreen(
            onOpenDiscord = {
              val intent = Intent(Intent.ACTION_VIEW, Uri.parse(discordInvite))
              context.startActivity(intent)
            },
            onCopyEmail = {
              clipboardManager.setText(AnnotatedString(supportEmail))
              Toast.makeText(context, "Email copied to clipboard!", Toast.LENGTH_SHORT).show()
            },
            onSendEmail = {
              val intent = Intent(Intent.ACTION_SENDTO).apply {
                data = Uri.parse("mailto:$supportEmail")
                putExtra(Intent.EXTRA_SUBJECT, "Project Inquiry - MCDeveloperHub")
              }
              context.startActivity(intent)
            }
          )
        }
      }
    }
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SLEEK HEADER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@Composable
fun SleekHeader(
  onJoinDiscord: () -> Unit
) {
  Surface(
    color = Color(0xCC141414),
    modifier = Modifier
      .fillMaxWidth()
      .statusBarsPadding()
      .border(
        width = 1.dp,
        color = Color(0x1AFFFFFF),
        shape = RoundedCornerShape(bottomStart = 16.dp, bottomEnd = 16.dp)
      )
  ) {
    Row(
      modifier = Modifier
        .fillMaxWidth()
        .padding(horizontal = 18.dp, vertical = 14.dp),
      verticalAlignment = Alignment.CenterVertically,
      horizontalArrangement = Arrangement.SpaceBetween
    ) {
      Row(verticalAlignment = Alignment.CenterVertically) {
        Box(
          modifier = Modifier
            .size(34.dp)
            .shadow(12.dp, RoundedCornerShape(10.dp), spotColor = Color(0xFFFF0000))
            .background(
              Brush.linearGradient(listOf(Color(0xFFDC2626), Color(0xFF991B1B))),
              RoundedCornerShape(10.dp)
            ),
          contentAlignment = Alignment.Center
        ) {
          Text(
            text = "MCH",
            fontSize = 11.sp,
            fontWeight = FontWeight.Black,
            color = Color.White,
            fontFamily = FontFamily.SansSerif
          )
        }
        Spacer(modifier = Modifier.width(10.dp))
        Column {
          Text(
            text = "MCDeveloperHub",
            fontSize = 15.sp,
            fontWeight = FontWeight.Bold,
            color = Color.White,
            letterSpacing = (-0.3).sp
          )
          Text(
            text = "DEV AGENCY",
            fontSize = 9.sp,
            fontWeight = FontWeight.SemiBold,
            color = RedPrimary,
            letterSpacing = 1.sp
          )
        }
      }

      Button(
        onClick = onJoinDiscord,
        shape = RoundedCornerShape(50),
        colors = ButtonDefaults.buttonColors(
          containerColor = Color(0xFFDC2626),
          contentColor = Color.White
        ),
        contentPadding = PaddingValues(horizontal = 14.dp, vertical = 6.dp),
        modifier = Modifier
          .height(34.dp)
          .testTag("header_join_discord")
      ) {
        Text(
          text = "JOIN DISCORD",
          fontSize = 10.sp,
          fontWeight = FontWeight.ExtraBold,
          letterSpacing = 0.5.sp
        )
      }
    }
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HOME SCREEN (Matches Sleek Interface Mockup)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@Composable
fun HomeScreen(
  onExploreServices: () -> Unit,
  onSelectCategory: (String) -> Unit,
  onJoinDiscord: () -> Unit
) {
  val infiniteTransition = rememberInfiniteTransition(label = "floating_logo")
  val floatOffset by infiniteTransition.animateFloat(
    initialValue = -6f,
    targetValue = 6f,
    animationSpec = infiniteRepeatable(
      animation = tween(2400, easing = FastOutSlowInEasing),
      repeatMode = RepeatMode.Reverse
    ),
    label = "float"
  )
  val glowPulse by infiniteTransition.animateFloat(
    initialValue = 0.7f,
    targetValue = 1.1f,
    animationSpec = infiniteRepeatable(
      animation = tween(1800, easing = FastOutSlowInEasing),
      repeatMode = RepeatMode.Reverse
    ),
    label = "glow"
  )

  LazyColumn(
    modifier = Modifier
      .fillMaxSize()
      .padding(horizontal = 20.dp),
    contentPadding = PaddingValues(top = 16.dp, bottom = 24.dp),
    verticalArrangement = Arrangement.spacedBy(16.dp)
  ) {
    // 1. HERO SECTION WITH 1:1 FLOATING LOGO
    item {
      Column(
        modifier = Modifier
          .fillMaxWidth()
          .padding(top = 8.dp),
        horizontalAlignment = Alignment.CenterHorizontally
      ) {
        // Floating Logo Mockup with Red Aura
        Box(
          modifier = Modifier
            .size(116.dp)
            .padding(8.dp),
          contentAlignment = Alignment.Center
        ) {
          // Blurred background glow
          Box(
            modifier = Modifier
              .size(90.dp)
              .scale(glowPulse)
              .background(Color(0x55FF0000), CircleShape)
              .blur(24.dp)
          )

          // Floating 1:1 Glass Container
          Box(
            modifier = Modifier
              .size(94.dp)
              .shadow(24.dp, RoundedCornerShape(26.dp), spotColor = Color(0xFFFF2247))
              .background(
                Brush.linearGradient(
                  colors = listOf(Color(0xFF22080D), Color(0xFF141419))
                ),
                shape = RoundedCornerShape(26.dp)
              )
              .border(
                width = 2.dp,
                brush = Brush.linearGradient(
                  colors = listOf(Color(0x80FF2247), Color(0x20FFFFFF))
                ),
                shape = RoundedCornerShape(26.dp)
              ),
            contentAlignment = Alignment.Center
          ) {
            Icon(
              imageVector = Icons.Default.Code,
              contentDescription = "MCDeveloperHub Logo Icon",
              tint = Color.White,
              modifier = Modifier
                .size(46.dp)
                .rotate(floatOffset * 1.5f)
            )
          }
        }

        Spacer(modifier = Modifier.height(10.dp))

        // Red Gradient Heading
        Text(
          text = "MCDeveloperHub",
          fontSize = 32.sp,
          fontWeight = FontWeight.Black,
          textAlign = TextAlign.Center,
          letterSpacing = (-0.8).sp,
          style = androidx.compose.ui.text.TextStyle(
            brush = Brush.linearGradient(
              colors = listOf(Color(0xFFFFFFFF), Color(0xFFFF4D4D))
            )
          )
        )

        Spacer(modifier = Modifier.height(4.dp))

        Text(
          text = "BUILD • CREATE • DEVELOP",
          fontSize = 11.sp,
          fontWeight = FontWeight.Bold,
          color = Color(0xFFA1A1AA),
          letterSpacing = 2.sp
        )

        Spacer(modifier = Modifier.height(8.dp))

        Text(
          text = "Professional Minecraft, Discord & Web systems for creators and communities.",
          fontSize = 12.sp,
          color = Color(0xFF71717A),
          textAlign = TextAlign.Center,
          lineHeight = 18.sp,
          modifier = Modifier.padding(horizontal = 24.dp)
        )
      }
    }

    // 2. SERVICES GRID (Compact Sleek Glass Cards)
    item {
      Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
      ) {
        // Category 1: Website
        SleekServiceMiniCard(
          modifier = Modifier.weight(1f),
          emoji = "🌐",
          label = "WEBSITE",
          priceTag = "₹999+",
          onClick = { onSelectCategory("Website") }
        )

        // Category 2: MC Server
        SleekServiceMiniCard(
          modifier = Modifier.weight(1f),
          emoji = "⛏️",
          label = "MC SERVER",
          priceTag = "₹100+",
          onClick = { onSelectCategory("Minecraft") }
        )

        // Category 3: Discord
        SleekServiceMiniCard(
          modifier = Modifier.weight(1f),
          emoji = "💬",
          label = "DISCORD",
          priceTag = "₹500+",
          onClick = { onSelectCategory("Discord") }
        )
      }
    }

    // 3. MAIN CTA GLASS CARD
    item {
      Card(
        shape = RoundedCornerShape(28.dp),
        colors = CardDefaults.cardColors(
          containerColor = Color(0xB3141414)
        ),
        modifier = Modifier
          .fillMaxWidth()
          .border(
            width = 1.dp,
            color = Color(0x33FF2247),
            shape = RoundedCornerShape(28.dp)
          )
          .shadow(16.dp, RoundedCornerShape(28.dp), spotColor = Color(0x40FF0000))
      ) {
        Box(
          modifier = Modifier
            .fillMaxWidth()
            .padding(20.dp)
        ) {
          // Top right subtle blur glow
          Box(
            modifier = Modifier
              .size(90.dp)
              .align(Alignment.TopEnd)
              .background(Color(0x22FF0000), CircleShape)
              .blur(30.dp)
          )

          Column {
            Row(
              verticalAlignment = Alignment.CenterVertically,
              horizontalArrangement = Arrangement.spacedBy(6.dp)
            ) {
              Box(
                modifier = Modifier
                  .size(6.dp)
                  .background(RedPrimary, CircleShape)
              )
              Text(
                text = "SPECIALIZED SERVICES",
                fontSize = 10.sp,
                fontWeight = FontWeight.Bold,
                color = RedAccent,
                letterSpacing = 1.sp
              )
            }

            Spacer(modifier = Modifier.height(4.dp))

            Text(
              text = "Ready to Build?",
              fontSize = 20.sp,
              fontWeight = FontWeight.Bold,
              color = Color.White
            )

            Spacer(modifier = Modifier.height(4.dp))

            Text(
              text = "Custom Discord bots and server networks tailored for your community.",
              fontSize = 12.sp,
              color = Color(0xFFA1A1AA),
              lineHeight = 17.sp
            )

            Spacer(modifier = Modifier.height(16.dp))

            Row(
              modifier = Modifier.fillMaxWidth(),
              horizontalArrangement = Arrangement.spacedBy(10.dp),
              verticalAlignment = Alignment.CenterVertically
            ) {
              Button(
                onClick = onExploreServices,
                shape = RoundedCornerShape(12.dp),
                colors = ButtonDefaults.buttonColors(
                  containerColor = Color.White,
                  contentColor = Color.Black
                ),
                modifier = Modifier
                  .weight(1f)
                  .height(46.dp)
                  .testTag("btn_explore_services")
              ) {
                Text(
                  text = "Explore Services",
                  fontSize = 13.sp,
                  fontWeight = FontWeight.Bold
                )
              }

              Surface(
                shape = RoundedCornerShape(12.dp),
                color = Color(0xFF27272A),
                modifier = Modifier
                  .size(46.dp)
                  .border(1.dp, Color(0xFF3F3F46), RoundedCornerShape(12.dp))
                  .clickable(onClick = onJoinDiscord)
              ) {
                Box(contentAlignment = Alignment.Center) {
                  Icon(
                    imageVector = Icons.Default.OpenInNew,
                    contentDescription = "Join Discord Action",
                    tint = Color.White,
                    modifier = Modifier.size(18.dp)
                  )
                }
              }
            }
          }
        }
      }
    }

    // 4. WHY US HIGHLIGHT STRIP
    item {
      Column(
        modifier = Modifier
          .fillMaxWidth()
          .padding(vertical = 4.dp)
      ) {
        Text(
          text = "CORE ADVANTAGES",
          fontSize = 10.sp,
          fontWeight = FontWeight.Bold,
          color = Color(0xFF71717A),
          letterSpacing = 1.sp,
          modifier = Modifier.padding(bottom = 8.dp)
        )

        Row(
          modifier = Modifier.fillMaxWidth(),
          horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
          AdvantagePill(modifier = Modifier.weight(1f), icon = "⚡", label = "Fast Delivery")
          AdvantagePill(modifier = Modifier.weight(1f), icon = "🛡️", label = "Anti-Cheat")
          AdvantagePill(modifier = Modifier.weight(1f), icon = "🚀", label = "24/7 Support")
        }
      }
    }
  }
}

@Composable
fun SleekServiceMiniCard(
  modifier: Modifier = Modifier,
  emoji: String,
  label: String,
  priceTag: String,
  onClick: () -> Unit
) {
  Surface(
    shape = RoundedCornerShape(18.dp),
    color = Color(0xB3141414),
    modifier = modifier
      .border(
        width = 1.dp,
        color = Color(0x33FF2247),
        shape = RoundedCornerShape(18.dp)
      )
      .clickable(onClick = onClick)
  ) {
    Column(
      modifier = Modifier
        .fillMaxWidth()
        .padding(vertical = 14.dp, horizontal = 6.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Text(text = emoji, fontSize = 22.sp)
      Spacer(modifier = Modifier.height(4.dp))
      Text(
        text = label,
        fontSize = 10.sp,
        fontWeight = FontWeight.Bold,
        color = Color(0xFFD4D4D8)
      )
      Spacer(modifier = Modifier.height(2.dp))
      Text(
        text = priceTag,
        fontSize = 11.sp,
        fontWeight = FontWeight.Bold,
        color = RedPrimary,
        fontFamily = FontFamily.Monospace
      )
    }
  }
}

@Composable
fun AdvantagePill(
  modifier: Modifier = Modifier,
  icon: String,
  label: String
) {
  Surface(
    shape = RoundedCornerShape(12.dp),
    color = Color(0x6618181B),
    modifier = modifier.border(1.dp, Color(0x1AFFFFFF), RoundedCornerShape(12.dp))
  ) {
    Row(
      modifier = Modifier.padding(vertical = 8.dp, horizontal = 6.dp),
      verticalAlignment = Alignment.CenterVertically,
      horizontalArrangement = Arrangement.Center
    ) {
      Text(text = icon, fontSize = 12.sp)
      Spacer(modifier = Modifier.width(4.dp))
      Text(
        text = label,
        fontSize = 10.sp,
        fontWeight = FontWeight.SemiBold,
        color = Color(0xFFA1A1AA)
      )
    }
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SERVICES SCREEN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@Composable
fun ServicesScreen(
  currentFilter: String,
  onFilterChange: (String) -> Unit,
  onOrderService: (ServiceItem) -> Unit
) {
  val allServices = remember {
    SampleWebsiteServices + SampleMCServices + SampleDiscordServices
  }

  val filteredServices = remember(currentFilter) {
    if (currentFilter == "ALL") allServices
    else allServices.filter { it.category.equals(currentFilter, ignoreCase = true) }
  }

  LazyColumn(
    modifier = Modifier
      .fillMaxSize()
      .padding(horizontal = 18.dp),
    contentPadding = PaddingValues(top = 16.dp, bottom = 24.dp),
    verticalArrangement = Arrangement.spacedBy(14.dp)
  ) {
    item {
      Column {
        Text(
          text = "SERVICE CATALOG",
          fontSize = 10.sp,
          fontWeight = FontWeight.Bold,
          color = RedAccent,
          letterSpacing = 1.sp
        )
        Text(
          text = "Tailored Packages",
          fontSize = 24.sp,
          fontWeight = FontWeight.Black,
          color = Color.White
        )
        Spacer(modifier = Modifier.height(12.dp))

        // Horizontal Category Tabs
        Row(
          modifier = Modifier
            .fillMaxWidth()
            .horizontalScroll(rememberScrollState()),
          horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
          CategoryFilterChip(label = "ALL", isSelected = currentFilter == "ALL", onClick = { onFilterChange("ALL") })
          CategoryFilterChip(label = "Website", isSelected = currentFilter == "Website", onClick = { onFilterChange("Website") })
          CategoryFilterChip(label = "Minecraft", isSelected = currentFilter == "Minecraft", onClick = { onFilterChange("Minecraft") })
          CategoryFilterChip(label = "Discord", isSelected = currentFilter == "Discord", onClick = { onFilterChange("Discord") })
        }
      }
    }

    items(filteredServices, key = { it.id }) { service ->
      SleekServiceDetailedCard(
        service = service,
        onOrder = { onOrderService(service) }
      )
    }
  }
}

@Composable
fun CategoryFilterChip(
  label: String,
  isSelected: Boolean,
  onClick: () -> Unit
) {
  val bgColor by animateColorAsState(
    targetValue = if (isSelected) RedPrimary else Color(0x8018181B),
    label = "chip_bg"
  )
  val textColor by animateColorAsState(
    targetValue = if (isSelected) Color.White else Color(0xFFA1A1AA),
    label = "chip_text"
  )

  Surface(
    shape = RoundedCornerShape(50),
    color = bgColor,
    modifier = Modifier
      .border(
        width = 1.dp,
        color = if (isSelected) RedGlow else Color(0x1AFFFFFF),
        shape = RoundedCornerShape(50)
      )
      .clickable(onClick = onClick)
  ) {
    Text(
      text = label,
      fontSize = 12.sp,
      fontWeight = FontWeight.Bold,
      color = textColor,
      modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp)
    )
  }
}

@Composable
fun SleekServiceDetailedCard(
  service: ServiceItem,
  onOrder: () -> Unit
) {
  Card(
    shape = RoundedCornerShape(22.dp),
    colors = CardDefaults.cardColors(containerColor = Color(0xB3141414)),
    modifier = Modifier
      .fillMaxWidth()
      .border(1.dp, Color(0x26FF2247), RoundedCornerShape(22.dp))
      .shadow(12.dp, RoundedCornerShape(22.dp), spotColor = Color(0x33FF0000))
  ) {
    Column(
      modifier = Modifier
        .fillMaxWidth()
        .padding(18.dp)
    ) {
      Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
      ) {
        Row(verticalAlignment = Alignment.CenterVertically) {
          Box(
            modifier = Modifier
              .size(38.dp)
              .background(Color(0x33FF2247), RoundedCornerShape(10.dp))
              .border(1.dp, Color(0x66FF2247), RoundedCornerShape(10.dp)),
            contentAlignment = Alignment.Center
          ) {
            val icon = when (service.category) {
              "Website" -> Icons.Default.Language
              "Minecraft" -> Icons.Default.Layers
              else -> Icons.Default.Code
            }
            Icon(
              imageVector = icon,
              contentDescription = service.title,
              tint = RedAccent,
              modifier = Modifier.size(20.dp)
            )
          }
          Spacer(modifier = Modifier.width(10.dp))
          Column {
            Text(
              text = service.title,
              fontSize = 16.sp,
              fontWeight = FontWeight.Bold,
              color = Color.White
            )
            Text(
              text = service.category.uppercase(),
              fontSize = 9.sp,
              fontWeight = FontWeight.SemiBold,
              color = Color(0xFF71717A),
              letterSpacing = 1.sp
            )
          }
        }

        if (service.badge != null) {
          Surface(
            shape = RoundedCornerShape(50),
            color = Color(0x22FF2247),
            modifier = Modifier.border(1.dp, Color(0x55FF2247), RoundedCornerShape(50))
          ) {
            Text(
              text = service.badge,
              fontSize = 9.sp,
              fontWeight = FontWeight.Black,
              color = RedAccent,
              modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp)
            )
          }
        }
      }

      Spacer(modifier = Modifier.height(10.dp))

      Text(
        text = service.description,
        fontSize = 12.sp,
        color = Color(0xFFA1A1AA),
        lineHeight = 17.sp
      )

      Spacer(modifier = Modifier.height(12.dp))

      // Feature bullet points
      Column(verticalArrangement = Arrangement.spacedBy(4.dp)) {
        service.features.take(3).forEach { feat ->
          Row(verticalAlignment = Alignment.CenterVertically) {
            Icon(
              imageVector = Icons.Default.CheckCircle,
              contentDescription = "Feature",
              tint = RedPrimary,
              modifier = Modifier.size(13.dp)
            )
            Spacer(modifier = Modifier.width(6.dp))
            Text(
              text = feat,
              fontSize = 11.sp,
              color = Color(0xFFD4D4D8)
            )
          }
        }
      }

      // If options exist (e.g. Premade vs Custom)
      if (service.options.isNotEmpty()) {
        Spacer(modifier = Modifier.height(10.dp))
        Row(
          modifier = Modifier.fillMaxWidth(),
          horizontalArrangement = Arrangement.spacedBy(8.dp)
        ) {
          service.options.forEach { opt ->
            Surface(
              shape = RoundedCornerShape(10.dp),
              color = Color(0x4027272A),
              modifier = Modifier
                .weight(1f)
                .border(1.dp, Color(0x20FFFFFF), RoundedCornerShape(10.dp))
            ) {
              Row(
                modifier = Modifier.padding(horizontal = 8.dp, vertical = 6.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
              ) {
                Text(text = opt.first, fontSize = 10.sp, color = Color(0xFFA1A1AA))
                Text(text = opt.second, fontSize = 11.sp, fontWeight = FontWeight.Bold, color = RedAccent)
              }
            }
          }
        }
      }

      Spacer(modifier = Modifier.height(14.dp))

      Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
      ) {
        Column {
          Text(
            text = service.price,
            fontSize = 18.sp,
            fontWeight = FontWeight.Black,
            color = Color.White,
            fontFamily = FontFamily.Monospace
          )
          Text(
            text = service.subtitle,
            fontSize = 10.sp,
            color = Color(0xFF71717A)
          )
        }

        Button(
          onClick = onOrder,
          shape = RoundedCornerShape(12.dp),
          colors = ButtonDefaults.buttonColors(
            containerColor = Color(0xFFDC2626),
            contentColor = Color.White
          ),
          contentPadding = PaddingValues(horizontal = 16.dp, vertical = 8.dp),
          modifier = Modifier.height(38.dp)
        ) {
          Text(
            text = "Order via Discord",
            fontSize = 11.sp,
            fontWeight = FontWeight.Bold
          )
        }
      }
    }
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DASHBOARD / SHOWCASE SCREEN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@Composable
fun DashboardScreen(
  onJoinDiscord: () -> Unit
) {
  LazyColumn(
    modifier = Modifier
      .fillMaxSize()
      .padding(horizontal = 18.dp),
    contentPadding = PaddingValues(top = 16.dp, bottom = 24.dp),
    verticalArrangement = Arrangement.spacedBy(16.dp)
  ) {
    item {
      Text(
        text = "DEVELOPMENT HUB",
        fontSize = 10.sp,
        fontWeight = FontWeight.Bold,
        color = RedAccent,
        letterSpacing = 1.sp
      )
      Text(
        text = "Agency Overview",
        fontSize = 24.sp,
        fontWeight = FontWeight.Black,
        color = Color.White
      )
      Spacer(modifier = Modifier.height(8.dp))
      Text(
        text = "Live status, active systems, and network statistics for MCDeveloperHub client deployments.",
        fontSize = 12.sp,
        color = Color(0xFFA1A1AA),
        lineHeight = 17.sp
      )
    }

    item {
      Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.spacedBy(10.dp)
      ) {
        DashboardStatCard(
          modifier = Modifier.weight(1f),
          title = "Turnaround",
          value = "24-48h",
          icon = "⚡"
        )
        DashboardStatCard(
          modifier = Modifier.weight(1f),
          title = "Uptime SLA",
          value = "99.9%",
          icon = "🛡️"
        )
        DashboardStatCard(
          modifier = Modifier.weight(1f),
          title = "Custom Work",
          value = "100%",
          icon = "🛠️"
        )
      }
    }

    item {
      Card(
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xB3141414)),
        modifier = Modifier
          .fillMaxWidth()
          .border(1.dp, Color(0x26FF2247), RoundedCornerShape(20.dp))
      ) {
        Column(modifier = Modifier.padding(18.dp)) {
          Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(8.dp)
          ) {
            Box(
              modifier = Modifier
                .size(8.dp)
                .background(Color(0xFF22C55E), CircleShape)
            )
            Text(
              text = "ALL SYSTEMS OPERATIONAL",
              fontSize = 11.sp,
              fontWeight = FontWeight.Bold,
              color = Color(0xFF22C55E),
              letterSpacing = 0.5.sp
            )
          }

          Spacer(modifier = Modifier.height(12.dp))

          StatusRow(name = "Minecraft Velocity Proxies", status = "ONLINE")
          StatusRow(name = "Discord Bot Hosting Infrastructure", status = "ONLINE")
          StatusRow(name = "Web & Billing Integration Portal", status = "ONLINE")
          StatusRow(name = "Anti-Bot Firewalls", status = "PROTECTED")
        }
      }
    }

    item {
      Button(
        onClick = onJoinDiscord,
        shape = RoundedCornerShape(14.dp),
        colors = ButtonDefaults.buttonColors(
          containerColor = Color(0xFFDC2626),
          contentColor = Color.White
        ),
        modifier = Modifier
          .fillMaxWidth()
          .height(48.dp)
      ) {
        Text(
          text = "Open Ticket on Discord",
          fontSize = 13.sp,
          fontWeight = FontWeight.Bold
        )
      }
    }
  }
}

@Composable
fun DashboardStatCard(
  modifier: Modifier = Modifier,
  title: String,
  value: String,
  icon: String
) {
  Surface(
    shape = RoundedCornerShape(16.dp),
    color = Color(0xB3141414),
    modifier = modifier.border(1.dp, Color(0x1AFFFFFF), RoundedCornerShape(16.dp))
  ) {
    Column(
      modifier = Modifier.padding(12.dp),
      horizontalAlignment = Alignment.CenterHorizontally
    ) {
      Text(text = icon, fontSize = 18.sp)
      Spacer(modifier = Modifier.height(4.dp))
      Text(
        text = value,
        fontSize = 14.sp,
        fontWeight = FontWeight.Black,
        color = Color.White,
        fontFamily = FontFamily.Monospace
      )
      Text(
        text = title,
        fontSize = 9.sp,
        color = Color(0xFF71717A)
      )
    }
  }
}

@Composable
fun StatusRow(name: String, status: String) {
  Row(
    modifier = Modifier
      .fillMaxWidth()
      .padding(vertical = 6.dp),
    horizontalArrangement = Arrangement.SpaceBetween,
    verticalAlignment = Alignment.CenterVertically
  ) {
    Text(text = name, fontSize = 12.sp, color = Color(0xFFD4D4D8))
    Text(
      text = status,
      fontSize = 10.sp,
      fontWeight = FontWeight.Bold,
      color = Color(0xFF22C55E),
      fontFamily = FontFamily.Monospace
    )
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONTACT SCREEN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@Composable
fun ContactScreen(
  onOpenDiscord: () -> Unit,
  onCopyEmail: () -> Unit,
  onSendEmail: () -> Unit
) {
  val context = LocalContext.current

  LazyColumn(
    modifier = Modifier
      .fillMaxSize()
      .padding(horizontal = 18.dp),
    contentPadding = PaddingValues(top = 16.dp, bottom = 24.dp),
    verticalArrangement = Arrangement.spacedBy(16.dp)
  ) {
    item {
      Text(
        text = "GET IN TOUCH",
        fontSize = 10.sp,
        fontWeight = FontWeight.Bold,
        color = RedAccent,
        letterSpacing = 1.sp
      )
      Text(
        text = "Contact & Community",
        fontSize = 24.sp,
        fontWeight = FontWeight.Black,
        color = Color.White
      )
      Spacer(modifier = Modifier.height(6.dp))
      Text(
        text = "Direct channels for custom quotes, ticket creation, collaboration and support.",
        fontSize = 12.sp,
        color = Color(0xFFA1A1AA)
      )
    }

    item {
      // Discord Card
      ContactChannelCard(
        title = "Discord Server",
        subtitle = "discord.gg/qsdzKXdFDk",
        desc = "Fastest turnaround via our automated ticket desk.",
        icon = Icons.Default.OpenInNew,
        actionLabel = "Open Discord",
        onClick = onOpenDiscord
      )
    }

    item {
      // Email Card
      ContactChannelCard(
        title = "Email Support",
        subtitle = "McDevloperHub@gmail.com",
        desc = "Business proposals, invoices, and custom quotes.",
        icon = Icons.Default.Email,
        actionLabel = "Send Email",
        onClick = onSendEmail,
        secondaryActionLabel = "Copy",
        onSecondaryClick = onCopyEmail
      )
    }

    item {
      // Social Links
      Column(
        modifier = Modifier
          .fillMaxWidth()
          .padding(top = 8.dp)
      ) {
        Text(
          text = "SOCIAL PROFILES",
          fontSize = 10.sp,
          fontWeight = FontWeight.Bold,
          color = Color(0xFF71717A),
          letterSpacing = 1.sp,
          modifier = Modifier.padding(bottom = 10.dp)
        )

        Row(
          modifier = Modifier.fillMaxWidth(),
          horizontalArrangement = Arrangement.spacedBy(10.dp)
        ) {
          Surface(
            shape = RoundedCornerShape(14.dp),
            color = Color(0xB3141414),
            modifier = Modifier
              .weight(1f)
              .border(1.dp, Color(0x20FFFFFF), RoundedCornerShape(14.dp))
              .clickable {
                val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://www.instagram.com/developer.terror?igsi=ZnM3NHNtdjF3dmpr"))
                context.startActivity(intent)
              }
          ) {
            Column(modifier = Modifier.padding(12.dp)) {
              Text(text = "Instagram", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color.White)
              Text(text = "@developer.terror", fontSize = 10.sp, color = RedAccent)
            }
          }

          Surface(
            shape = RoundedCornerShape(14.dp),
            color = Color(0xB3141414),
            modifier = Modifier
              .weight(1f)
              .border(1.dp, Color(0x20FFFFFF), RoundedCornerShape(14.dp))
              .clickable {
                val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://youtube.com/@terror1943?si=mjXOVW4TZnGoXd26"))
                context.startActivity(intent)
              }
          ) {
            Column(modifier = Modifier.padding(12.dp)) {
              Text(text = "YouTube", fontSize = 12.sp, fontWeight = FontWeight.Bold, color = Color.White)
              Text(text = "@terror1943", fontSize = 10.sp, color = RedAccent)
            }
          }
        }
      }
    }
  }
}

@Composable
fun ContactChannelCard(
  title: String,
  subtitle: String,
  desc: String,
  icon: androidx.compose.ui.graphics.vector.ImageVector,
  actionLabel: String,
  onClick: () -> Unit,
  secondaryActionLabel: String? = null,
  onSecondaryClick: (() -> Unit)? = null
) {
  Card(
    shape = RoundedCornerShape(20.dp),
    colors = CardDefaults.cardColors(containerColor = Color(0xB3141414)),
    modifier = Modifier
      .fillMaxWidth()
      .border(1.dp, Color(0x26FF2247), RoundedCornerShape(20.dp))
  ) {
    Column(modifier = Modifier.padding(18.dp)) {
      Row(
        modifier = Modifier.fillMaxWidth(),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
      ) {
        Column {
          Text(text = title, fontSize = 15.sp, fontWeight = FontWeight.Bold, color = Color.White)
          Text(text = subtitle, fontSize = 12.sp, fontWeight = FontWeight.SemiBold, color = RedAccent)
        }
        Icon(imageVector = icon, contentDescription = title, tint = RedAccent, modifier = Modifier.size(22.dp))
      }

      Spacer(modifier = Modifier.height(6.dp))

      Text(text = desc, fontSize = 11.sp, color = Color(0xFFA1A1AA))

      Spacer(modifier = Modifier.height(14.dp))

      Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
        Button(
          onClick = onClick,
          shape = RoundedCornerShape(10.dp),
          colors = ButtonDefaults.buttonColors(containerColor = Color(0xFFDC2626)),
          contentPadding = PaddingValues(horizontal = 14.dp, vertical = 6.dp),
          modifier = Modifier.height(36.dp)
        ) {
          Text(text = actionLabel, fontSize = 11.sp, fontWeight = FontWeight.Bold)
        }

        if (secondaryActionLabel != null && onSecondaryClick != null) {
          Surface(
            shape = RoundedCornerShape(10.dp),
            color = Color(0xFF27272A),
            modifier = Modifier
              .height(36.dp)
              .border(1.dp, Color(0xFF3F3F46), RoundedCornerShape(10.dp))
              .clickable(onClick = onSecondaryClick)
          ) {
            Box(
              modifier = Modifier.padding(horizontal = 12.dp),
              contentAlignment = Alignment.Center
            ) {
              Text(
                text = secondaryActionLabel,
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                color = Color.White
              )
            }
          }
        }
      }
    }
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SLEEK BOTTOM NAVIGATION (Matches Sleek Interface Mockup)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
@Composable
fun SleekBottomNav(
  selectedTab: Int,
  onTabSelected: (Int) -> Unit
) {
  Surface(
    color = Color(0xE6141414),
    modifier = Modifier
      .fillMaxWidth()
      .navigationBarsPadding()
      .border(
        width = 1.dp,
        color = Color(0x1AFFFFFF),
        shape = RoundedCornerShape(topStart = 24.dp, topEnd = 24.dp)
      )
  ) {
    Row(
      modifier = Modifier
        .fillMaxWidth()
        .padding(vertical = 12.dp),
      horizontalArrangement = Arrangement.SpaceAround,
      verticalAlignment = Alignment.CenterVertically
    ) {
      SleekNavItem(
        label = "HOME",
        isSelected = selectedTab == 0,
        onClick = { onTabSelected(0) }
      )
      SleekNavItem(
        label = "SERVICES",
        isSelected = selectedTab == 1,
        onClick = { onTabSelected(1) }
      )
      SleekNavItem(
        label = "DASHBOARD",
        isSelected = selectedTab == 2,
        onClick = { onTabSelected(2) }
      )
      SleekNavItem(
        label = "CONTACT",
        isSelected = selectedTab == 3,
        onClick = { onTabSelected(3) }
      )
    }
  }
}

@Composable
fun SleekNavItem(
  label: String,
  isSelected: Boolean,
  onClick: () -> Unit
) {
  val interactionSource = remember { MutableInteractionSource() }

  Column(
    modifier = Modifier
      .clickable(
        interactionSource = interactionSource,
        indication = null,
        onClick = onClick
      )
      .padding(horizontal = 12.dp, vertical = 2.dp),
    horizontalAlignment = Alignment.CenterHorizontally,
    verticalArrangement = Arrangement.Center
  ) {
    // Red glowing dot for active item
    Box(
      modifier = Modifier
        .size(5.dp)
        .shadow(
          elevation = if (isSelected) 8.dp else 0.dp,
          shape = CircleShape,
          spotColor = Color(0xFFFF0000)
        )
        .background(
          color = if (isSelected) Color(0xFFDC2626) else Color.Transparent,
          shape = CircleShape
        )
    )

    Spacer(modifier = Modifier.height(4.dp))

    Text(
      text = label,
      fontSize = 9.sp,
      fontWeight = FontWeight.Bold,
      color = if (isSelected) Color.White else Color(0x66FFFFFF),
      letterSpacing = 0.5.sp
    )
  }
}
